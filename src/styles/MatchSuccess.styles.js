import styled from "styled-components";

/* ========================================
   PAGE
======================================== */

export const MatchSuccessContainer = styled.main`
  position: relative;

  width: 390px;
  max-width: 100%;
  height: 100dvh;

  background: var(--color-white);

  overflow: hidden;
`;

export const MatchSuccessContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 28px 28px;

  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* ========================================
   SUCCESS
======================================== */

export const SuccessSection = styled.section`
  margin-top: 34px;
`;

export const SuccessTitle = styled.h1`
  margin: 0;

  color: var(--color-black);

  font-size: 48px;
  font-weight: 700;
  line-height: 1.03;
  letter-spacing: -1.8px;
`;

export const SuccessTitleAccent = styled.span`
  position: relative;

  display: inline-block;

  color: var(--color-main);
`;

export const SuccessRadius = styled.img`
  position: absolute;

  z-index: 0;

  width: 72px;
  height: 72px;

  right: -30px;
  bottom: -25px;

  object-fit: contain;

  pointer-events: none;
`;

export const SuccessDescription = styled.p`
  margin: 28px 0 0;

  color: var(--color-gray);

  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: -0.3px;
`;

/* ========================================
   SONGS
======================================== */

export const SongsSection = styled.section`
  width: 100%;

  margin-top: 30px;

  display: grid;
  grid-template-columns: 1fr 38px 1fr;

  align-items: center;

  gap: 10px;
`;

export const SongCard = styled.div`
  min-width: 0;

  padding: 16px 14px 18px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ $matched }) =>
    $matched ? "var(--color-light-main)" : "#f4f4f4"};

  border-radius: 14px;
`;

export const AlbumCover = styled.div`
  width: 110px;
  max-width: 100%;
  aspect-ratio: 1 / 1;

  border-radius: 12px;

  background: var(--color-light-light-gray);

  overflow: hidden;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const SongTitle = styled.strong`
  width: 100%;

  margin-top: 16px;

  color: var(--color-black);

  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;

  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SongArtist = styled.span`
  width: 100%;

  margin-top: 8px;

  color: var(--color-gray);

  font-size: 13px;
  font-weight: 400;

  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ConnectIcon = styled.img`
  width: 28px;
  height: auto;

  justify-self: center;

  object-fit: contain;
`;

/* ========================================
   MUSIC MATCH
======================================== */

export const MatchCard = styled.section`
  width: 100%;

  margin-top: 28px;
  padding: 28px 38px 30px;

  box-sizing: border-box;

  background: var(--color-white);

  border: 1px solid var(--color-light-light-gray);
  border-radius: 14px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  text-align: center;
`;

export const MatchLabel = styled.h2`
  margin: 0;

  color: var(--color-black);

  font-size: 20px;
  font-weight: 600;
`;

export const MatchPercent = styled.strong`
  display: block;

  margin-top: 16px;

  color: var(--color-black);

  font-size: 42px;
  font-weight: 700;
  line-height: 1;
`;

export const MatchProgress = styled.div`
  width: 100%;
  height: 12px;

  margin-top: 28px;

  background: var(--color-light-light-gray);

  border-radius: 999px;

  overflow: hidden;
`;

export const MatchProgressFill = styled.div`
  width: ${({ $percent }) => `${$percent}%`};
  height: 100%;

  background: var(--color-main);

  border-radius: inherit;

  transition: width 0.6s ease;
`;

/* ========================================
   BUTTONS
======================================== */

export const BottomButtonArea = styled.div`
  width: 100%;

  margin-top: 28px;

  display: flex;

  gap: 12px;
`;

export const SkipButton = styled.button`
  width: 92px;
  height: 48px;

  flex-shrink: 0;

  border: 1px solid var(--color-gray);
  border-radius: 4px;

  background: var(--color-white);
  color: var(--color-black);

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export const InviteButton = styled.button`
  flex: 1;
  height: 48px;

  border: 1px solid var(--color-main);
  border-radius: 4px;

  background: var(--color-main);
  color: var(--color-white);

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;