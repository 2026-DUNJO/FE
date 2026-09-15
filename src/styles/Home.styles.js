import styled from "styled-components";

/* ========================================
   HOME COMMON
======================================== */

export const HomeContainer = styled.main`
  position: relative;

  width: 390px;
  max-width: 100%;

  height: 100dvh;

  background: var(--color-white);

  overflow: hidden;
`;

/* ========================================
   BEFORE SPOTIFY
======================================== */

export const BeforeContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 14px 9px 32px;

  background: var(--color-white);

  overflow-y: auto;
  overflow-x: hidden;

  box-sizing: border-box;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BeforeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wordmark = styled.img`
  width: 198px;
  height: auto;

  object-fit: contain;
`;

export const ThrowText = styled.p`
  margin: 0;

  color: var(--color-gray);

  font-size: 17px;
  font-weight: 500;
  line-height: 0.95;

  text-align: right;
`;

export const IntroSection = styled.section`
  margin-top: 62px;
`;

export const IntroTitle = styled.h1`
  margin: 0;

  color: var(--color-black);

  font-size: 48px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -2px;

  strong {
    color: var(--color-main);
  }
`;

export const IntroDescription = styled.p`
  margin: 38px 0 0;

  color: var(--color-gray);

  font-size: 18px;
  font-weight: 400;
  line-height: 1.9;

  letter-spacing: -0.4px;
`;

export const FeatureList = styled.div`
  margin-top: 66px;

  display: flex;
  flex-direction: column;

  gap: 38px;
`;

export const FeatureIcon = styled.img`
  width: 52px;
  height: 52px;

  flex-shrink: 0;

  object-fit: contain;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const FeatureTitle = styled.h3`
  margin: 0;

  color: var(--color-black);

  font-size: 20px;
  font-weight: 700;
`;

export const FeatureDescription = styled.p`
  margin: 0;

  color: var(--color-gray);

  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
`;

export const SpotifyButton = styled.button`
  width: 100%;
  height: 64px;

  margin-top: 38px;

  border: none;
  border-radius: 4px;

  background: var(--color-main);
  color: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  font-family: inherit;
  font-size: 20px;
  font-weight: 700;

  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export const SpotifyIcon = styled.img`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  object-fit: contain;
`;

/* ========================================
   AFTER SPOTIFY
======================================== */

export const AfterContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background: var(--color-white);
`;

export const AfterContent = styled.div`
  height: 100%;

  padding: 64px 28px 100px;

  overflow-y: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeWordmark = styled.img`
  width: 158px;
  height: auto;
`;

export const BellButton = styled.button`
  width: 32px;
  height: 32px;

  padding: 0;

  border: none;

  background: transparent;
  color: var(--color-black);

  font-size: 20px;

  cursor: pointer;
`;

/* ========================================
   NOW PLAYING
======================================== */

export const NowPlayingCard = styled.section`
  margin-top: 28px;

  min-height: 116px;

  padding: 20px;

  border-radius: 14px;

  background: #f4f4f4;

  display: flex;
  align-items: center;

  gap: 22px;
`;

export const AlbumCover = styled.div`
  width: 76px;
  height: 76px;

  flex-shrink: 0;

  border-radius: 12px;

  background: var(--color-light-light-gray);

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const TrackContent = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
`;

export const NowPlayingLabel = styled.span`
  margin-bottom: 12px;

  color: var(--color-main);

  font-size: 11px;
  font-weight: 500;
`;

export const TrackTitle = styled.strong`
  color: var(--color-black);

  font-size: 18px;
  font-weight: 700;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackArtist = styled.span`
  margin-top: 8px;

  color: var(--color-gray);

  font-size: 14px;
  font-weight: 400;
`;

/* ========================================
   MATCHING CARD
======================================== */

export const MatchingCard = styled.section`
  margin-top: 22px;

  padding: 24px 20px 28px;

  border: 1px solid var(--color-light-light-gray);
  border-radius: 14px;

  background: var(--color-white);

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const MatchingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MatchingStatus = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  color: var(--color-main);

  font-size: 12px;
  font-weight: 700;
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--color-main);
`;

export const Arrow = styled.span`
  color: var(--color-gray);

  font-size: 30px;
  line-height: 1;
`;

/* ========================================
   RADAR
======================================== */

export const RadarArea = styled.div`
  margin-top: 26px;

  display: flex;
  justify-content: center;
`;

export const RadarOuter = styled.div`
  width: 190px;
  height: 190px;

  border: 1px solid var(--color-light-main);
  border-radius: 50%;

  background: rgba(250, 224, 222, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadarMiddle = styled.div`
  width: 128px;
  height: 128px;

  border: 1px solid var(--color-light-main);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadarInner = styled.div`
  width: 66px;
  height: 66px;

  border: 1px solid var(--color-light-main);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadarDot = styled.div`
  width: 22px;
  height: 22px;

  border-radius: 50%;

  background: var(--color-main);
`;

export const RadiusText = styled.p`
  margin: 24px 0 0;

  color: var(--color-gray);

  font-size: 14px;

  text-align: center;

  strong {
    color: var(--color-black);

    font-size: 17px;
    font-weight: 700;
  }
`;

export const MatchingDescription = styled.p`
  margin: 8px 0 0;

  color: var(--color-gray);

  font-size: 12px;
  line-height: 1.5;

  text-align: center;
`;

/* ========================================
   MATCHING STATS
======================================== */

export const MatchingStats = styled.div`
  margin-top: 28px;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const StatItem = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatIcon = styled.div`
  height: 30px;

  color: var(--color-black);

  font-size: 26px;
`;

export const StatLabel = styled.span`
  margin-top: 10px;

  color: var(--color-gray);

  font-size: 12px;
`;

export const StatValue = styled.strong`
  margin-top: 8px;

  color: var(--color-black);

  font-size: 17px;
  font-weight: 600;
`;

export const StatDivider = styled.div`
  width: 1px;

  background: var(--color-light-light-gray);
`;

export const MatchingArrow = styled.span`
  color: var(--color-gray);
  font-size: 28px;
  font-weight: 400;
  line-height: 1;

  cursor: pointer;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;