import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import dunjoSymbol from "../assets/dunjo-symbol.svg";

import { chatData } from "../data/chatData";

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

  const [activeTab, setActiveTab] = useState("friends");

  /* ==============================
     친구 / 요청 분리
  ============================== */

  const friends = chatData.filter(
    (chat) => chat.type === "friend"
  );

  const requests = chatData.filter(
    (chat) => chat.type === "request"
  );

  const currentList =
    activeTab === "friends"
      ? friends
      : requests;

  /* ==============================
     채팅방 이동
  ============================== */

  const handleChatClick = (chatRoomId) => {
    navigate(`/chat/${chatRoomId}`);
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
            $active={activeTab === "friends"}
            onClick={() => setActiveTab("friends")}
          >
            친구
          </ChatTab>

          <ChatTab
            type="button"
            $active={activeTab === "requests"}
            onClick={() => setActiveTab("requests")}
          >
            요청

            {requests.length > 0 && (
              <RequestBadge>
                {requests.length}
              </RequestBadge>
            )}
          </ChatTab>

          <TabIndicator $activeTab={activeTab} />
        </ChatTabs>

        {/* ==============================
            CHAT LIST
        ============================== */}

        {currentList.length > 0 ? (
          <ChatList>
            {currentList.map((chat) => (
              <ChatCard
                key={chat.chatRoomId}
                type="button"
                $request={chat.type === "request"}
                onClick={() =>
                  handleChatClick(chat.chatRoomId)
                }
              >
                {/* PROFILE */}

                <ProfileImage>
                  <ProfileSymbol
                    src={dunjoSymbol}
                    alt=""
                  />
                </ProfileImage>

                {/* INFO */}

                <ChatInfo>
                  <ChatNameRow>
                    <ChatNickname>
                      {chat.nickname}
                    </ChatNickname>

                    {chat.unread && (
                      <UnreadDot />
                    )}
                  </ChatNameRow>

                  <LastSong>
                    {chat.type === "request"
                      ? `던진 곡　${chat.lastSong}`
                      : `마지막 곡　${chat.lastSong}`}
                  </LastSong>
                </ChatInfo>

                <ChatArrow>
                  ›
                </ChatArrow>
              </ChatCard>
            ))}
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