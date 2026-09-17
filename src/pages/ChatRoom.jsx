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
import playWhite from "../assets/play_white.svg";
import exitIcon from "../assets/exit.svg";

import {
  ChatRoomContainer,
  ChatRoomContent,

  RoomHeader,
  BackButton,
  RoomNickname,
  ExitButton,
  ExitIcon,

  MessageList,

  SongMessage,

  SongCard,
  SongAlbum,
  SongInfo,
  SongName,
  SongArtist,

  PlayButton,
  PlayIcon,

  SystemMessage,

  ThrowButtonArea,
  ThrowButton,

  Overlay,
  SongPickerSheet,
  PickerHandle,
  PickerTitle,
  PickerDescription,

  SongOptionList,
  SongOption,
  PickerAlbum,
  PickerSongInfo,
  PickerSongTitle,
  PickerSongArtist,

  CancelButton,

  EndFriendOverlay,
  EndFriendSheet,
  EndFriendTitle,
  EndFriendDescription,
  EndFriendButton,
  EndFriendCancelButton,
} from "../styles/ChatRoom.styles";

const ChatRoom = () => {
  const navigate = useNavigate();

  const { chatRoomId } =
    useParams();

  /* ==============================
     STATE
  ============================== */

  const [messages, setMessages] =
    useState([]);

  const [
    spotifySongs,
    setSpotifySongs,
  ] = useState([]);

  const [
    friendship,
    setFriendship,
  ] = useState(null);

  const [nickname, setNickname] =
    useState("친구");

  const [myUserId, setMyUserId] =
    useState(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const [
    isPickerOpen,
    setIsPickerOpen,
  ] = useState(false);

  const [
    isEndFriendOpen,
    setIsEndFriendOpen,
  ] = useState(false);

  const [isSending, setIsSending] =
    useState(false);

  /* ==============================
     내 정보 조회
  ============================== */

  const fetchMe = async () => {
    const response =
      await api.get("/users/me");

    setMyUserId(
      response.data.id
    );

    return response.data;
  };

  /* ==============================
     친구 정보 조회
  ============================== */

  const fetchFriendship =
    async () => {
      const response =
        await api.get(
          "/friendships"
        );

      const friendshipList =
        Array.isArray(response.data)
          ? response.data
          : [];

      const currentFriendship =
        friendshipList.find(
          (item) =>
            Number(
              item.chatRoomId
            ) ===
            Number(chatRoomId)
        );

      if (!currentFriendship) {
        return null;
      }

      setFriendship(
        currentFriendship
      );

      setNickname(
        currentFriendship.friend
          ?.nickname ||
          currentFriendship.nickname ||
          "친구"
      );

      return currentFriendship;
    };

  /* ==============================
     메시지 조회
  ============================== */

  const fetchMessages =
    async () => {
      const response =
        await api.get(
          `/chatrooms/${chatRoomId}/messages`
        );

      console.log(
        "채팅 메시지:",
        response.data
      );

      setMessages(
        Array.isArray(response.data)
          ? response.data
          : []
      );
    };

  /* ==============================
     최근 Spotify 곡
  ============================== */

  const fetchSpotifySongs =
    async () => {
      try {
        const response =
          await api.get(
            "/spotify/recently-played"
          );

        setSpotifySongs(
          Array.isArray(response.data)
            ? response.data
            : []
        );
      } catch (error) {
        console.error(
          "최근 Spotify 곡 조회 실패:",
          error.response?.data ||
            error
        );

        setSpotifySongs([]);
      }
    };

  /* ==============================
     최초 로딩
  ============================== */

  useEffect(() => {
    const initialize =
      async () => {
        try {
          setIsLoading(true);

          await Promise.all([
            fetchMe(),
            fetchFriendship(),
            fetchMessages(),
          ]);
        } catch (error) {
          console.error(
            "채팅방 조회 실패:",
            error.response?.data ||
              error
          );
        } finally {
          setIsLoading(false);
        }
      };

    initialize();
  }, [chatRoomId]);

  /* ==============================
     곡 선택창 열기
  ============================== */

  const handleOpenPicker =
    async () => {
      setIsPickerOpen(true);

      await fetchSpotifySongs();
    };

  /* ==============================
     곡 던지기
  ============================== */

  const handleThrowSong =
    async (song) => {
      if (isSending) {
        return;
      }

      try {
        setIsSending(true);

        const response =
          await api.post(
            `/chatrooms/${chatRoomId}/messages`,
            {
              spotifyTrackId:
                song.spotifyTrackId,

              trackTitle:
                song.title,

              trackArtist:
                song.artist,

              albumImage:
                song.albumImage ||
                null,

              spotifyUrl:
                song.spotifyUrl ||
                null,
            }
          );

        console.log(
          "곡 던지기 성공:",
          response.data
        );

        setIsPickerOpen(false);

        await fetchMessages();
      } catch (error) {
        console.error(
          "곡 던지기 실패:",
          error.response?.data ||
            error
        );

        alert(
          error.response?.data
            ?.message ||
            "곡을 던지지 못했습니다."
        );
      } finally {
        setIsSending(false);
      }
    };

  /* ==============================
     Spotify 열기
  ============================== */

  const handlePlay = (
    spotifyUrl
  ) => {
    if (!spotifyUrl) {
      return;
    }

    window.open(
      spotifyUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ==============================
     친구 종료 모달
  ============================== */

  const handleOpenEndFriend =
    () => {
      setIsEndFriendOpen(true);
    };

  const handleCloseEndFriend =
    () => {
      setIsEndFriendOpen(false);
    };

  /* ==============================
     친구 관계 종료
  ============================== */

  const handleEndFriend =
    async () => {
      if (!friendship) {
        alert(
          "친구 관계 정보를 찾을 수 없습니다."
        );
        return;
      }

      const friendshipId =
        friendship.friendshipId ??
        friendship.id;

      try {
        await api.delete(
          `/friendships/${friendshipId}`
        );

        console.log(
          "친구 관계 종료:",
          friendshipId
        );

        setIsEndFriendOpen(false);

        navigate("/chat", {
          replace: true,
        });
      } catch (error) {
        console.error(
          "친구 관계 종료 실패:",
          error.response?.data ||
            error
        );

        alert(
          error.response?.data
            ?.message ||
            "친구 관계를 종료하지 못했습니다."
        );
      }
    };

  /* ==============================
     메시지 → 화면용 데이터
  ============================== */

  const getMessageSong = (
    message
  ) => ({
    spotifyTrackId:
      message.spotifyTrackId,

    title:
      message.trackTitle,

    artist:
      message.trackArtist,

    albumImage:
      message.albumImage,

    spotifyUrl:
      message.spotifyUrl,
  });

  /* ==============================
     LOADING
  ============================== */

  if (isLoading) {
    return (
      <ChatRoomContainer>
        <ChatRoomContent>
          <Header />

          <SystemMessage>
            채팅방을 불러오는 중...
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
            {nickname}
          </RoomNickname>

          <ExitButton
            type="button"
            onClick={
              handleOpenEndFriend
            }
            aria-label="친구 관계 종료"
          >
            <ExitIcon
              src={exitIcon}
              alt=""
            />
          </ExitButton>
        </RoomHeader>

        {/* ==============================
            MESSAGE LIST
        ============================== */}

        <MessageList>
          {messages.length === 0 ? (
            <SystemMessage>
              아직 주고받은 곡이
              없어요.
            </SystemMessage>
          ) : (
            messages.map(
              (message) => {
                const mine =
                  Number(
                    message.senderId
                  ) ===
                  Number(myUserId);

                const song =
                  getMessageSong(
                    message
                  );

                return (
                  <SongMessage
                    key={message.id}
                    $mine={mine}
                  >
                    <SongCard>
                      <SongAlbum>
                        {song.albumImage && (
                          <img
                            src={
                              song.albumImage
                            }
                            alt={
                              song.title
                            }
                          />
                        )}
                      </SongAlbum>

                      <SongInfo>
                        <SongName>
                          {song.title}
                        </SongName>

                        <SongArtist>
                          {song.artist}
                        </SongArtist>
                      </SongInfo>

                      <PlayButton
                        type="button"
                        onClick={() =>
                          handlePlay(
                            song.spotifyUrl
                          )
                        }
                      >
                        <PlayIcon
                          src={
                            mine
                              ? playWhite
                              : playBlack
                          }
                          alt="Spotify에서 열기"
                        />
                      </PlayButton>
                    </SongCard>
                  </SongMessage>
                );
              }
            )
          )}
        </MessageList>
      </ChatRoomContent>

      {/* ==============================
          곡 던지기
      ============================== */}

      <ThrowButtonArea>
        <ThrowButton
          type="button"
          onClick={
            handleOpenPicker
          }
        >
          ♫
          <span>
            곡 던지기
          </span>
        </ThrowButton>
      </ThrowButtonArea>

      {/* ==============================
          SONG PICKER
      ============================== */}

      {isPickerOpen && (
        <>
          <Overlay
            onClick={() =>
              setIsPickerOpen(false)
            }
          />

          <SongPickerSheet>
            <PickerHandle />

            <PickerTitle>
              곡 던지기
            </PickerTitle>

            <PickerDescription>
              최근 들은 Spotify 곡
              중 상대에게 던질 곡을
              선택해주세요.
            </PickerDescription>

            <SongOptionList>
              {spotifySongs.length >
              0 ? (
                spotifySongs.map(
                  (song) => (
                    <SongOption
                      key={
                        song.spotifyTrackId
                      }
                      type="button"
                      disabled={
                        isSending
                      }
                      onClick={() =>
                        handleThrowSong(
                          song
                        )
                      }
                    >
                      <PickerAlbum>
                        {song.albumImage && (
                          <img
                            src={
                              song.albumImage
                            }
                            alt={
                              song.title
                            }
                          />
                        )}
                      </PickerAlbum>

                      <PickerSongInfo>
                        <PickerSongTitle>
                          {song.title}
                        </PickerSongTitle>

                        <PickerSongArtist>
                          {song.artist}
                        </PickerSongArtist>
                      </PickerSongInfo>

                      <span>
                        ›
                      </span>
                    </SongOption>
                  )
                )
              ) : (
                <SystemMessage>
                  최근 들은 곡이
                  없어요.
                </SystemMessage>
              )}
            </SongOptionList>

            <CancelButton
              type="button"
              onClick={() =>
                setIsPickerOpen(false)
              }
            >
              취소
            </CancelButton>
          </SongPickerSheet>
        </>
      )}

      {/* ==============================
          친구 종료
      ============================== */}

      {isEndFriendOpen && (
        <>
          <EndFriendOverlay
            onClick={
              handleCloseEndFriend
            }
          />

          <EndFriendSheet>
            <EndFriendTitle>
              친구 관계를 종료할까요?
            </EndFriendTitle>

            <EndFriendDescription>
              지금까지 주고받은 음악은
              <br />
              기록에 남지 않습니다.
            </EndFriendDescription>

            <EndFriendButton
              type="button"
              onClick={
                handleEndFriend
              }
            >
              친구 종료
            </EndFriendButton>

            <EndFriendCancelButton
              type="button"
              onClick={
                handleCloseEndFriend
              }
            >
              취소
            </EndFriendCancelButton>
          </EndFriendSheet>
        </>
      )}
    </ChatRoomContainer>
  );
};

export default ChatRoom;