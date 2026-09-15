export const chatData = [
  {
    id: 1,
    chatRoomId: 101,
    nickname: "친구 1",
    username: "@friend1",
    lastSong: "ITZY - THAT’S NO NO",
    unread: true,
    type: "friend",
  },
  {
    id: 2,
    chatRoomId: 102,
    nickname: "친구 2",
    username: "@friend2",
    lastSong: "BLACKPINK - JUMP",
    unread: false,
    type: "friend",
  },
  {
    id: 3,
    chatRoomId: 103,
    nickname: "친구 3",
    username: "@friend3",
    lastSong: "제니 (JENNIE) - Mantra",
    unread: true,
    type: "request",
  },
];

export const getChatByRoomId = (chatRoomId) => {
  return chatData.find(
    (chat) => String(chat.chatRoomId) === String(chatRoomId)
  );
};