import {
  useEffect,
  useState,
} from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import api from "../api/axios";

import Header from "../components/Header";

import playBlack from "../assets/play_black.svg";

import {
  ChatRoomContainer,
  ChatRoomContent,

  RoomHeader,
  BackButton,
  RoomNickname,

  MessageList,

  SongMessage,
  SongTitle,

  SongCard,
  SongAlbum,
  SongInfo,
  SongName,
  SongArtist,

  PlayButton,
  PlayIcon,

  AcceptButton,
  SystemMessage,
} from "../styles/ChatRoom.styles";

const Request = () => {
  const navigate = useNavigate();

  const { invitationId } =
    useParams();

  const [invitation, setInvitation] =
    useState(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const [isAccepting, setIsAccepting] =
    useState(false);

  const [error, setError] =
    useState("");

  /* ==============================
     초대장 상세 조회
  ============================== */

  useEffect(() => {
    const fetchInvitation =
      async () => {
        try {
          setIsLoading(true);
          setError("");

          const response =
            await api.get(
              `/invitations/${invitationId}`
            );

          console.log(
            "초대장 상세:",
            response.data
          );

          setInvitation(
            response.data
          );
        } catch (error) {
          console.error(
            "초대장 조회 실패:",
            error.response?.data ||
              error
          );

          setError(
            error.response?.data
              ?.message ||
              "초대장을 불러오지 못했습니다."
          );
        } finally {
          setIsLoading(false);
        }
      };

    fetchInvitation();
  }, [invitationId]);

  /* ==============================
     수락
  ============================== */

  const handleAccept = async () => {
    if (isAccepting) {
      return;
    }

    try {
      setIsAccepting(true);

      const response =
        await api.post(
          `/invitations/${invitationId}/accept`
        );

      console.log(
        "초대 수락 성공:",
        response.data
      );

      const chatRoomId =
        response.data.chatRoomId;

      if (!chatRoomId) {
        console.error(
          "chatRoomId가 없습니다:",
          response.data
        );

        alert(
          "채팅방 정보를 불러오지 못했습니다."
        );

        return;
      }

      navigate(
        `/chat/${chatRoomId}`,
        {
          replace: true,
        }
      );
    } catch (error) {
      console.error(
        "초대 수락 실패:",
        error.response?.data ||
          error
      );

      alert(
        error.response?.data
          ?.message ||
          "친구 초대장을 수락하지 못했습니다."
      );
    } finally {
      setIsAccepting(false);
    }
  };

  /* ==============================
     Spotify 열기
  ============================== */

  const handlePlay = () => {
    if (!invitation?.spotifyUrl) {
      return;
    }

    window.open(
      invitation.spotifyUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ==============================
     LOADING
  ============================== */

  if (isLoading) {
    return (
      <ChatRoomContainer>
        <ChatRoomContent>
          <Header />

          <SystemMessage>
            초대장을 불러오는 중...
          </SystemMessage>
        </ChatRoomContent>
      </ChatRoomContainer>
    );
  }

  /* ==============================
     ERROR
  ============================== */

  if (
    error ||
    !invitation
  ) {
    return (
      <ChatRoomContainer>
        <ChatRoomContent>
          <Header />

          <RoomHeader>
            <BackButton
              type="button"
              onClick={() =>
                navigate("/chat")
              }
            >
              ‹
            </BackButton>

            <RoomNickname>
              친구 요청
            </RoomNickname>
          </RoomHeader>

          <SystemMessage>
            {error ||
              "초대장을 찾을 수 없습니다."}
          </SystemMessage>
        </ChatRoomContent>
      </ChatRoomContainer>
    );
  }

  return (
    <ChatRoomContainer>
      <ChatRoomContent>
        <Header />

        {/* ==============================
            HEADER
        ============================== */}

        <RoomHeader>
          <BackButton
            type="button"
            onClick={() =>
              navigate("/chat")
            }
          >
            ‹
          </BackButton>

          <RoomNickname>
            {invitation.sender
              ?.nickname ||
              "친구"}
          </RoomNickname>
        </RoomHeader>

        {/* ==============================
            INVITATION
        ============================== */}

        <MessageList>
          <SongMessage $mine={false}>
            <SongTitle>
              친구 초대장을 던졌어요.
            </SongTitle>

            <SongCard>
              <SongAlbum>
                {invitation.albumImage && (
                  <img
                    src={
                      invitation.albumImage
                    }
                    alt={
                      invitation.trackTitle
                    }
                  />
                )}
              </SongAlbum>

              <SongInfo>
                <SongName>
                  {
                    invitation.trackTitle
                  }
                </SongName>

                <SongArtist>
                  {
                    invitation.trackArtist
                  }
                </SongArtist>
              </SongInfo>

              <PlayButton
                type="button"
                onClick={handlePlay}
              >
                <PlayIcon
                  src={playBlack}
                  alt="Spotify에서 열기"
                />
              </PlayButton>
            </SongCard>

            {invitation.status ===
              "PENDING" && (
              <AcceptButton
                type="button"
                onClick={
                  handleAccept
                }
                disabled={
                  isAccepting
                }
              >
                {isAccepting
                  ? "수락 중..."
                  : "수락하기"}
              </AcceptButton>
            )}

            {invitation.status ===
              "ACCEPTED" && (
              <SystemMessage>
                이미 수락한
                초대장입니다.
              </SystemMessage>
            )}

            {invitation.status ===
              "REJECTED" && (
              <SystemMessage>
                거절된 초대장입니다.
              </SystemMessage>
            )}
          </SongMessage>
        </MessageList>
      </ChatRoomContent>
    </ChatRoomContainer>
  );
};

export default Request;