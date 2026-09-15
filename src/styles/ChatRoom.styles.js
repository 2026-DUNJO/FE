import styled from "styled-components";

/* ========================================
   CHAT ROOM
======================================== */

export const ChatRoomContainer = styled.main`
  position: relative;

  width: 390px;
  max-width: 100%;
  height: 100dvh;

  background: var(--color-white);

  overflow: hidden;
`;

export const ChatRoomContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 28px 100px;

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
   ROOM HEADER
======================================== */

export const RoomHeader = styled.header`
  position: relative;

  width: 100%;
  height: 54px;

  margin-top: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  width: 36px;
  height: 36px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: none;

  background: transparent;

  color: var(--color-black);

  font-family: inherit;
  font-size: 32px;
  font-weight: 300;
  line-height: 1;

  cursor: pointer;
`;

export const RoomNickname = styled.strong`
  position: absolute;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  max-width: 210px;

  color: var(--color-black);

  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MoreButton = styled.button`
  width: 36px;
  height: 36px;

  margin-left: auto;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border: none;

  background: transparent;

  color: var(--color-black);

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;

  cursor: pointer;
`;

/* ========================================
   MESSAGE LIST
======================================== */

export const MessageList = styled.div`
  width: 100%;

  padding: 18px 0 30px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  gap: 28px;
`;

/* ========================================
   SONG MESSAGE
======================================== */

export const SongMessage = styled.div`
  width: 255px;
  max-width: 82%;

  align-self: ${({ $mine }) =>
    $mine ? "flex-end" : "flex-start"};

  padding: 18px;

  box-sizing: border-box;

  border-radius: 4px;

  background: ${({ $mine }) =>
    $mine
      ? "rgba(229, 100, 88, 0.8)"
      : "var(--color-light-light-gray)"};

  color: ${({ $mine }) =>
    $mine
      ? "var(--color-white)"
      : "var(--color-black)"};
`;

export const SongTitle = styled.strong`
  display: block;

  margin: 0 0 18px;

  color: inherit;

  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;

  text-align: center;
`;

/* ========================================
   SONG CARD
======================================== */

export const SongCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 12px;
`;

export const SongAlbum = styled.div`
  width: 62px;
  height: 62px;

  flex-shrink: 0;

  border-radius: 8px;

  background: var(--color-light-gray);

  overflow: hidden;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const SongInfo = styled.div`
  min-width: 0;

  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const SongName = styled.strong`
  width: 100%;

  color: inherit;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongArtist = styled.span`
  width: 100%;

  color: inherit;

  font-size: 11px;
  font-weight: 400;
  line-height: 1.4;

  opacity: 0.75;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* ========================================
   PLAY
======================================== */

export const PlayButton = styled.button`
  width: 26px;
  height: 26px;

  flex: 0 0 26px;

  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background: transparent;

  cursor: pointer;

  &:active {
    transform: scale(0.94);
  }
`;

export const PlayIcon = styled.img`
  display: block;

  width: 26px;
  height: 26px;

  flex-shrink: 0;

  object-fit: contain;

  pointer-events: none;
`;

/* ========================================
   ACCEPT BUTTON
======================================== */

export const AcceptButton = styled.button`
  display: block;

  min-width: 104px;
  height: 36px;

  margin: 20px auto 0;
  padding: 0 20px;

  border: none;
  border-radius: 999px;

  background: var(--color-main);
  color: var(--color-white);

  font-family: inherit;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

/* ========================================
   SYSTEM MESSAGE
======================================== */

export const SystemMessage = styled.div`
  width: fit-content;
  max-width: 255px;

  align-self: flex-start;

  padding: 16px 20px;

  box-sizing: border-box;

  border-radius: 4px;

  background: var(--color-light-light-gray);
  color: var(--color-black);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

/* ========================================
   THROW BUTTON
======================================== */

export const ThrowButtonArea = styled.div`
  position: absolute;

  left: 28px;
  right: 28px;
  bottom: 24px;

  z-index: 5;

  background: var(--color-white);
`;

export const ThrowButton = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  background: var(--color-main);
  color: var(--color-white);

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }
`;

/* ========================================
   SONG PICKER OVERLAY
======================================== */

export const Overlay = styled.div`
  position: absolute;

  inset: 0;

  z-index: 20;

  background: rgba(0, 0, 0, 0.45);
`;

/* ========================================
   SONG PICKER
======================================== */

export const SongPickerSheet = styled.section`
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  z-index: 30;

  padding: 12px 28px 28px;

  box-sizing: border-box;

  border-radius: 24px 24px 0 0;

  background: var(--color-white);
`;

export const PickerHandle = styled.div`
  width: 42px;
  height: 4px;

  margin: 0 auto 24px;

  border-radius: 999px;

  background: var(--color-light-gray);
`;

export const PickerTitle = styled.h2`
  margin: 0;

  color: var(--color-black);

  font-size: 20px;
  font-weight: 700;
`;

export const PickerDescription = styled.p`
  margin: 8px 0 20px;

  color: var(--color-gray);

  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`;

/* ========================================
   SONG OPTIONS
======================================== */

export const SongOptionList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const SongOption = styled.button`
  width: 100%;

  padding: 10px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  gap: 12px;

  border: none;
  border-radius: 8px;

  background: #f5f5f5;
  color: var(--color-black);

  font-family: inherit;
  text-align: left;

  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }
`;

export const PickerAlbum = styled.div`
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  border-radius: 7px;

  background: var(--color-light-light-gray);

  overflow: hidden;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const PickerSongInfo = styled.div`
  min-width: 0;

  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const PickerSongTitle = styled.strong`
  color: var(--color-black);

  font-size: 14px;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PickerSongArtist = styled.span`
  color: var(--color-gray);

  font-size: 12px;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 44px;

  margin-top: 16px;

  border: 1px solid var(--color-light-gray);
  border-radius: 4px;

  background: var(--color-white);
  color: var(--color-black);

  font-family: inherit;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }
`;