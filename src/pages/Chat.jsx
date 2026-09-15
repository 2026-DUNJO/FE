import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import dunjoSymbol from "../assets/dunjo-symbol.svg";

import {
  ChatContainer,
  ChatContent,

  ChatTabs,
  TabButton,
  RequestTabContent,
  RequestBadge,
  TabIndicator,

  ChatList,
  FriendCard,
  FriendProfile,
  FriendSymbol,
  FriendContent,
  FriendNameRow,
  FriendName,
  UnreadDot,
  LastSong,
  Arrow,

  EmptyMessage,
} from "../styles/Chat.styles";

const Chat = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("friends");

  // TODO: 백엔드 연결 후 실제 친구 데이터로 변경
  const friends = [
    {
      id: 1,
      chatRoomId: 101,
      nickname: "친구 1",
      lastSong: "ITZY - THAT’S NO NO",
      unread: true,
    },
    {
      id: 2,
      chatRoomId: 102,
      nickname: "친구 2",
      lastSong: "BLACKPINK - JUMP",
      unread: false,
    },
  ];

  // TODO: 백엔드 연결 후 실제 요청 데이터로 변경
  const requests = [
    {
      id: 3,
      nickname: "친구 3",
      song: "제니 (JENNIE) - Mantra",
      similarity: 73,
      unread: true,
    },
  ];

  /* 친구 클릭 */
  const handleFriendClick = (chatRoomId) => {
    // TODO: 실제 채팅방 페이지 만든 후 사용
    console.log("채팅방:", chatRoomId);

    // navigate(`/chat/${chatRoomId}`);
  };

  /* 요청 클릭 */
  const handleRequestClick = (requestId) => {
    navigate(`/chat/request/${requestId}`);
  };

  return (
    <ChatContainer>
      <ChatContent>
        <Header />

        {/* TAB */}
        <ChatTabs>
          <TabButton
            type="button"
            $active={activeTab === "friends"}
            onClick={() => setActiveTab("friends")}
          >
            친구
          </TabButton>

          <TabButton
            type="button"
            $active={activeTab === "requests"}
            onClick={() => setActiveTab("requests")}
          >
            <RequestTabContent>
              요청

              {requests.length > 0 && (
                <RequestBadge>
                  {requests.length}
                </RequestBadge>
              )}
            </RequestTabContent>
          </TabButton>

          <TabIndicator $activeTab={activeTab} />
        </ChatTabs>

        {/* =========================
            친구
        ========================= */}
        {activeTab === "friends" && (
          <ChatList>
            {friends.length > 0 ? (
              friends.map((friend) => (
                <FriendCard
                  key={friend.id}
                  type="button"
                  onClick={() =>
                    handleFriendClick(friend.chatRoomId)
                  }
                >
                  <FriendProfile>
                    <FriendSymbol
                      src={dunjoSymbol}
                      alt=""
                    />
                  </FriendProfile>

                  <FriendContent>
                    <FriendNameRow>
                      <FriendName>
                        {friend.nickname}
                      </FriendName>

                      {friend.unread && (
                        <UnreadDot />
                      )}
                    </FriendNameRow>

                    <LastSong>
                      <span>마지막 곡</span>
                      {friend.lastSong}
                    </LastSong>
                  </FriendContent>

                  <Arrow>›</Arrow>
                </FriendCard>
              ))
            ) : (
              <EmptyMessage>
                아직 연결된 친구가 없습니다.
              </EmptyMessage>
            )}
          </ChatList>
        )}

        {/* =========================
            요청
        ========================= */}
        {activeTab === "requests" && (
          <ChatList>
            {requests.length > 0 ? (
              requests.map((request) => (
                <FriendCard
                  key={request.id}
                  type="button"
                  onClick={() =>
                    handleRequestClick(request.id)
                  }
                >
                  <FriendProfile>
                    <FriendSymbol
                      src={dunjoSymbol}
                      alt=""
                    />
                  </FriendProfile>

                  <FriendContent>
                    <FriendNameRow>
                      <FriendName>
                        {request.nickname}
                      </FriendName>

                      {request.unread && (
                        <UnreadDot />
                      )}
                    </FriendNameRow>

                    <LastSong>
                      <span>던진 곡</span>
                      {request.song}
                    </LastSong>
                  </FriendContent>

                  <Arrow>›</Arrow>
                </FriendCard>
              ))
            ) : (
              <EmptyMessage>
                새로운 친구 요청이 없습니다.
              </EmptyMessage>
            )}
          </ChatList>
        )}
      </ChatContent>

      <NavBar />
    </ChatContainer>
  );
};

export default Chat;