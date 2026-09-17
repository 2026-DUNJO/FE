import {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import dunjoSymbol from "../assets/dunjo-symbol.svg";

import {
  ChatContainer,
  ChatContent,
  ChatTabs,
  ChatTab,
  RequestBadge,
  TabIndicator,
  ChatList,
  ChatCard,
  ProfileImage,
  ProfileSymbol,
  ChatInfo,
  ChatNameRow,
  ChatNickname,
  UnreadDot,
  LastSong,
  ChatArrow,
  EmptyMessage,
} from "../styles/Chat.styles";

const Chat = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("friends");

  const [friends, setFriends] =
    useState([]);

  const [requests, setRequests] =
    useState([]);

  const [isLoading, setIsLoading] =
    useState(true);

  /* ==============================
     친구 목록 조회
  ============================== */

  const fetchFriends = async () => {
    try {
      const response = await api.get(
        "/friendships"
      );

      console.log(
        "친구 목록:",
        response.data
      );

      setFriends(
        Array.isArray(response.data)
          ? response.data
          : []
      );
    } catch (error) {
      console.error(
        "친구 목록 조회 실패:",
        error.response?.data || error
      );

      setFriends([]);
    }
  };

  /* ==============================
     받은 요청 조회
  ============================== */

  const fetchRequests = async () => {
    try {
      const response = await api.get(
        "/invitations/received"
      );

      console.log(
        "받은 친구 요청:",
        response.data
      );

      setRequests(
        Array.isArray(response.data)
          ? response.data
          : []
      );
    } catch (error) {
      console.error(
        "친구 요청 조회 실패:",
        error.response?.data || error
      );

      setRequests([]);
    }
  };

  /* ==============================
     최초 조회
  ============================== */

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await Promise.all([
        fetchFriends(),
        fetchRequests(),
      ]);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  /* ==============================
     현재 탭 목록
  ============================== */

  const currentList =
    activeTab === "friends"
      ? friends
      : requests;

  /* ==============================
     친구 클릭
  ============================== */

  const handleFriendClick = (
    friendship
  ) => {
    if (!friendship.chatRoomId) {
      console.error(
        "chatRoomId가 없습니다:",
        friendship
      );
      return;
    }

    navigate(
      `/chat/${friendship.chatRoomId}`
    );
  };

  /* ==============================
     요청 클릭
  ============================== */

  const handleRequestClick = (
    invitationId
  ) => {
    navigate(
      `/request/${invitationId}`
    );
  };

  /* ==============================
     친구 정보 안전하게 가져오기
  ============================== */

  const getFriendNickname = (
    friendship
  ) => {
    return (
      friendship.friend?.nickname ||
      friendship.nickname ||
      "친구"
    );
  };

  const getFriendLastSong = (
    friendship
  ) => {
    if (friendship.lastMessage) {
      const title =
        friendship.lastMessage
          .trackTitle;

      const artist =
        friendship.lastMessage
          .trackArtist;

      if (title && artist) {
        return `${artist} - ${title}`;
      }
    }

    return "아직 주고받은 곡이 없어요.";
  };

  return (
    <ChatContainer>
      <ChatContent>
        <Header />

        {/* ==============================
            TAB
        ============================== */}

        <ChatTabs>
          <ChatTab
            type="button"
            $active={
              activeTab === "friends"
            }
            onClick={() =>
              setActiveTab("friends")
            }
          >
            친구
          </ChatTab>

          <ChatTab
            type="button"
            $active={
              activeTab === "requests"
            }
            onClick={() =>
              setActiveTab("requests")
            }
          >
            요청

            {requests.length > 0 && (
              <RequestBadge>
                {requests.length}
              </RequestBadge>
            )}
          </ChatTab>

          <TabIndicator
            $activeTab={activeTab}
          />
        </ChatTabs>

        {/* ==============================
            LOADING
        ============================== */}

        {isLoading ? (
          <EmptyMessage>
            불러오는 중...
          </EmptyMessage>
        ) : currentList.length > 0 ? (
          <ChatList>

            {/* ==========================
                FRIEND
            ========================== */}

            {activeTab === "friends" &&
              friends.map(
                (friendship) => (
                  <ChatCard
                    key={
                      friendship.friendshipId ??
                      friendship.id
                    }
                    type="button"
                    onClick={() =>
                      handleFriendClick(
                        friendship
                      )
                    }
                  >
                    <ProfileImage>
                      <ProfileSymbol
                        src={dunjoSymbol}
                        alt=""
                      />
                    </ProfileImage>

                    <ChatInfo>
                      <ChatNameRow>
                        <ChatNickname>
                          {getFriendNickname(
                            friendship
                          )}
                        </ChatNickname>

                        {friendship.unreadCount > 0 && (
                          <RequestBadge>
                            {friendship.unrealCount > 99
                              ? " 99+"
                              : friendship.unreadCount}
                          </RequestBadge>
                        )}
                      </ChatNameRow>

                      <LastSong>
                        {getFriendLastSong(
                          friendship
                        )}
                      </LastSong>
                    </ChatInfo>

                    <ChatArrow>
                      ›
                    </ChatArrow>
                  </ChatCard>
                )
              )}

            {/* ==========================
                REQUEST
            ========================== */}

            {activeTab === "requests" &&
              requests.map(
                (invitation) => (
                  <ChatCard
                    key={invitation.id}
                    type="button"
                    $request
                    onClick={() =>
                      handleRequestClick(
                        invitation.id
                      )
                    }
                  >
                    <ProfileImage>
                      <ProfileSymbol
                        src={dunjoSymbol}
                        alt=""
                      />
                    </ProfileImage>

                    <ChatInfo>
                      <ChatNameRow>
                        <ChatNickname>
                          {invitation
                            .sender
                            ?.nickname ||
                            "채팅방"}
                        </ChatNickname>

                        <UnreadDot />
                      </ChatNameRow>

                      <LastSong>
                        {
                          invitation.trackArtist
                        }{" "}
                        -{" "}
                        {
                          invitation.trackTitle
                        }
                      </LastSong>
                    </ChatInfo>

                    <ChatArrow>
                      ›
                    </ChatArrow>
                  </ChatCard>
                )
              )}
          </ChatList>
        ) : (
          <EmptyMessage>
            {activeTab === "friends"
              ? "아직 친구가 없어요."
              : "새로운 요청이 없어요."}
          </EmptyMessage>
        )}
      </ChatContent>

      <NavBar />
    </ChatContainer>
  );
};

export default Chat;