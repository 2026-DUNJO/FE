import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Header from "../components/Header";

import playBlack from "../assets/play_black.svg";
import playWhite from "../assets/play_white.svg";

import {
  getChatByRoomId,
} from "../data/chatData";

import {
  ChatRoomContainer,
  ChatRoomContent,

  RoomHeader,
  BackButton,
  RoomNickname,
  MoreButton,

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
} from "../styles/ChatRoom.styles";

const ChatRoom = () => {
  const navigate = useNavigate();

  /* ==============================
     URL
  ============================== */

  const { chatRoomId } = useParams();

  /* ==============================
     CHAT DATA
  ============================== */

  const chat = getChatByRoomId(chatRoomId);

  const isRequest =
    chat?.type === "request";

  /* ==============================
     STATE
  ============================== */

  const [status, setStatus] = useState(
    isRequest ? "PENDING" : "ACCEPTED"
  );

  const [isPickerOpen, setIsPickerOpen] =
    useState(false);

  /* ==============================
     MOCK MESSAGE
  ============================== */

  const [messages, setMessages] = useState(() => {
    if (!chat) {
      return [];
    }

    /*
      친구 요청 방
      친구 3
    */

    if (chat.type === "request") {
      return [
        {
          id: 1,
          type: "INVITE",
          mine: false,

          song: {
            spotifyTrackId:
              "track-like-jennie",

            title: "like JENNIE",

            artist:
              "제니 (JENNIE)",

            albumImage: "",
          },
        },
      ];
    }

    /*
      이미 친구인 방
      친구 1 / 친구 2
    */

    return [
      {
        id: 1,

        type: "INVITE",

        mine: true,

        song: {
          spotifyTrackId:
            "track-like-jennie",

          title: "like JENNIE",

          artist:
            "제니 (JENNIE)",

          albumImage: "",
        },
      },

      {
        id: 2,

        type: "SYSTEM",

        text:
          "친구 초대장을 수락했어요.",
      },

      {
        id: 3,

        type: "SONG",

        mine: true,

        song: {
          spotifyTrackId:
            "track-lemonade",

          title: "LEMONADE",

          artist:
            "aespa (에스파)",

          albumImage: "",
        },
      },

      {
        id: 4,

        type: "SONG",

        mine: false,

        song: {
          spotifyTrackId:
            "track-unique",

          title: "UNIQUE",

          artist:
            "P1Harmony",

          albumImage: "",
        },
      },
    ];
  });

  /* ==============================
     MOCK SPOTIFY SONG
  ============================== */

  const spotifySongs = [
    {
      spotifyTrackId: "spotify-1",

      title: "Mantra",

      artist: "JENNIE",

      albumImage: "",
    },

    {
      spotifyTrackId: "spotify-2",

      title: "LEMONADE",

      artist: "aespa",

      albumImage: "",
    },

    {
      spotifyTrackId: "spotify-3",

      title: "UNIQUE",

      artist: "P1Harmony",

      albumImage: "",
    },
  ];

  /* ==============================
     ACCEPT
  ============================== */

  const handleAccept = () => {
    setStatus("ACCEPTED");

    setMessages((prev) => [
      ...prev,

      {
        id: Date.now(),

        type: "SYSTEM",

        text:
          "친구 초대장을 수락했어요.",
      },
    ]);

    // TODO
    // 백엔드 연결
    //
    // await acceptFriendRequest(chatRoomId);
  };

  /* ==============================
     THROW SONG
  ============================== */

  const handleThrowSong = (song) => {
    setMessages((prev) => [
      ...prev,

      {
        id: Date.now(),

        type: "SONG",

        mine: true,

        song,
      },
    ]);

    setIsPickerOpen(false);

    // TODO
    // 백엔드 연결
    //
    // await sendSong(chatRoomId, {
    //   spotifyTrackId:
    //     song.spotifyTrackId,
    // });
  };

  /* ==============================
     PLAY
  ============================== */

  const handlePlay = (
    spotifyTrackId
  ) => {
    console.log(
      "Spotify 곡 재생:",
      spotifyTrackId
    );
  };

  /* ==============================
     NOT FOUND
  ============================== */

  if (!chat) {
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
              존재하지 않는 친구
            </RoomNickname>

            <MoreButton
              type="button"
            >
              •••
            </MoreButton>
          </RoomHeader>
        </ChatRoomContent>
      </ChatRoomContainer>
    );
  }

  /* ==============================
     PAGE
  ============================== */

  return (
    <ChatRoomContainer>
      <ChatRoomContent>
        <Header />

        {/* ==============================
            ROOM HEADER
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
            {chat.nickname}
          </RoomNickname>

          <MoreButton
            type="button"
          >
            •••
          </MoreButton>
        </RoomHeader>

        {/* ==============================
            MESSAGE
        ============================== */}

        <MessageList>
          {messages.map(
            (message) => {
              /* INVITE */

              if (
                message.type ===
                "INVITE"
              ) {
                return (
                  <SongMessage
                    key={message.id}
                    $mine={
                      message.mine
                    }
                  >
                    <SongTitle>
                      친구 초대장을
                      던졌어요.
                    </SongTitle>

                    <SongCard>
                      <SongAlbum>
                        {message.song
                          .albumImage && (
                          <img
                            src={
                              message
                                .song
                                .albumImage
                            }
                            alt={
                              message
                                .song
                                .title
                            }
                          />
                        )}
                      </SongAlbum>

                      <SongInfo>
                        <SongName>
                          {
                            message.song
                              .title
                          }
                        </SongName>

                        <SongArtist>
                          {
                            message.song
                              .artist
                          }
                        </SongArtist>
                      </SongInfo>

                      <PlayButton
                        type="button"
                        onClick={() =>
                          handlePlay(
                            message
                              .song
                              .spotifyTrackId
                          )
                        }
                      >
                        <PlayIcon
                          src={
                            message.mine
                              ? playWhite
                              : playBlack
                          }
                          alt="재생"
                        />
                      </PlayButton>
                    </SongCard>

                    {!message.mine &&
                      status ===
                        "PENDING" && (
                        <AcceptButton
                          type="button"
                          onClick={
                            handleAccept
                          }
                        >
                          수락하기
                        </AcceptButton>
                      )}
                  </SongMessage>
                );
              }

              /* SYSTEM */

              if (
                message.type ===
                "SYSTEM"
              ) {
                return (
                  <SystemMessage
                    key={message.id}
                  >
                    {message.text}
                  </SystemMessage>
                );
              }

              /* SONG */

              if (
                message.type ===
                "SONG"
              ) {
                return (
                  <SongMessage
                    key={message.id}
                    $mine={
                      message.mine
                    }
                  >
                    <SongCard>
                      <SongAlbum>
                        {message.song
                          .albumImage && (
                          <img
                            src={
                              message
                                .song
                                .albumImage
                            }
                            alt={
                              message
                                .song
                                .title
                            }
                          />
                        )}
                      </SongAlbum>

                      <SongInfo>
                        <SongName>
                          {
                            message.song
                              .title
                          }
                        </SongName>

                        <SongArtist>
                          {
                            message.song
                              .artist
                          }
                        </SongArtist>
                      </SongInfo>

                      <PlayButton
                        type="button"
                        onClick={() =>
                          handlePlay(
                            message
                              .song
                              .spotifyTrackId
                          )
                        }
                      >
                        <PlayIcon
                          src={
                            message.mine
                              ? playWhite
                              : playBlack
                          }
                          alt="재생"
                        />
                      </PlayButton>
                    </SongCard>
                  </SongMessage>
                );
              }

              return null;
            }
          )}
        </MessageList>
      </ChatRoomContent>

      {/* ==============================
          THROW BUTTON
      ============================== */}

      {status === "ACCEPTED" && (
        <ThrowButtonArea>
          <ThrowButton
            type="button"
            onClick={() =>
              setIsPickerOpen(true)
            }
          >
            ♫
            <span>
              곡 던지기
            </span>
          </ThrowButton>
        </ThrowButtonArea>
      )}

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
              Spotify에서 상대에게
              던질 곡을 선택해주세요.
            </PickerDescription>

            <SongOptionList>
              {spotifySongs.map(
                (song) => (
                  <SongOption
                    key={
                      song.spotifyTrackId
                    }
                    type="button"
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
    </ChatRoomContainer>
  );
};

export default ChatRoom;