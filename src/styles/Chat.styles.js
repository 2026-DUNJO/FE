import styled from "styled-components";

/* ========================================
   PAGE
======================================== */

export const ChatContainer = styled.main`
  position: relative;

  width: 390px;
  max-width: 100%;
  height: 100dvh;

  background: var(--color-white);

  overflow: hidden;
`;

export const ChatContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 28px 110px;

  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;

  overscroll-behavior: contain;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* ========================================
   TAB
======================================== */

export const ChatTabs = styled.div`
  position: relative;

  width: 100%;

  margin-top: 42px;

  display: flex;

  border-bottom: 1px solid var(--color-light-light-gray);
`;

export const TabButton = styled.button`
  width: 50%;
  height: 46px;

  padding: 0;

  border: none;

  background: transparent;

  color: ${({ $active }) =>
    $active
      ? "var(--color-black)"
      : "var(--color-light-gray)"};

  font-family: inherit;
  font-size: 17px;
  font-weight: ${({ $active }) =>
    $active ? 600 : 500};

  cursor: pointer;

  transition: color 0.2s ease;
`;

export const RequestTabContent = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;
`;

export const RequestBadge = styled.span`
  min-width: 18px;
  height: 18px;

  padding: 0 5px;

  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: var(--color-main);
  color: var(--color-white);

  font-size: 10px;
  font-weight: 600;
`;

export const TabIndicator = styled.div`
  position: absolute;

  left: ${({ $activeTab }) =>
    $activeTab === "friends" ? "0" : "50%"};

  bottom: -1px;

  width: 50%;
  height: 2px;

  display: flex;
  justify-content: center;

  transition: left 0.25s ease;

  &::after {
    content: "";

    width: 82px;
    height: 2px;

    border-radius: 999px;

    background: var(--color-main);
  }
`;

/* ========================================
   LIST
======================================== */

export const ChatList = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

/* ========================================
   CARD
======================================== */

export const FriendCard = styled.button`
  width: 100%;
  min-height: 86px;

  padding: 14px 16px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  gap: 18px;

  border: 1px solid var(--color-light-light-gray);
  border-radius: 14px;

  background: var(--color-white);

  font-family: inherit;
  text-align: left;

  cursor: pointer;

  transition:
    border-color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    border-color: var(--color-light-gray);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const FriendProfile = styled.div`
  width: 58px;
  height: 58px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: var(--color-black);
`;

export const FriendSymbol = styled.img`
  width: 28px;
  height: auto;

  object-fit: contain;
`;

export const FriendContent = styled.div`
  min-width: 0;

  flex: 1;
`;

export const FriendNameRow = styled.div`
  display: flex;
  align-items: center;

  gap: 7px;
`;

export const FriendName = styled.strong`
  color: var(--color-black);

  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
`;

/* 안 읽은 친구 / 새 요청 공통 표시 */
export const UnreadDot = styled.span`
  width: 7px;
  height: 7px;

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--color-main);
`;

export const LastSong = styled.p`
  margin: 5px 0 0;

  color: var(--color-gray);

  font-size: 12px;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    margin-right: 10px;
  }
`;

export const Arrow = styled.span`
  flex-shrink: 0;

  color: var(--color-gray);

  font-size: 28px;
  font-weight: 400;
  line-height: 1;
`;

export const EmptyMessage = styled.p`
  margin: 80px 0 0;

  color: var(--color-light-gray);

  font-size: 14px;
  font-weight: 400;

  text-align: center;
`;