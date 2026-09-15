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
   BEFORE HOME
======================================== */

export const BeforeContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 28px 32px;

  box-sizing: border-box;

  background: var(--color-white);

  overflow-y: auto;
  overflow-x: hidden;

  overscroll-behavior: contain;

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
  margin-top: 36px;
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
  margin: 20px 0 0;

  color: var(--color-gray);

  font-size: 16px;
  font-weight: 400;
  line-height: 160%;

  letter-spacing: -0.4px;
`;

export const FeatureList = styled.div`
  margin-top: 52px;

  display: flex;
  flex-direction: column;

  gap: 36px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  gap: 24px;
`;

export const FeatureIcon = styled.img`
  width: 36px;
  height: 36px;

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

  font-size: 16px;
  font-weight: 600;
  line-height: 160%;
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

  margin-top: 64px;

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
   BEFORE HOME - RADIUS
======================================== */

export const ThrowTextWrapper = styled.span`
  position: relative;

  display: inline-block;
`;

export const BeforeRadius = styled.img`
  position: absolute;

  z-index: 1;

  width: 72px;
  height: 72px;

  right: -29px;
  bottom: -22px;

  pointer-events: none;
`;

/* ========================================
   AFTER HOME
======================================== */

export const AfterContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background: var(--color-white);

  overflow: hidden;
`;

export const AfterContent = styled.div`
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
   NOW PLAYING
======================================== */

export const NowPlayingCard = styled.section`
  width: 100%;

  min-height: 116px;

  margin-top: 28px;
  padding: 24px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  gap: 22px;

  background: #f4f4f4;

  border-radius: 14px;
`;

export const AlbumCover = styled.div`
  width: 76px;
  height: 76px;

  flex-shrink: 0;

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

export const TrackContent = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
`;

export const NowPlayingLabel = styled.span`
  margin-bottom: 4px;

  color: var(--color-main);

  font-size: 10px;
  font-weight: 500;
  line-height: 160%;
`;

export const TrackTitle = styled.strong`
  color: var(--color-black);

  font-size: 16px;
  font-weight: 600;
  line-height: 160%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackArtist = styled.span`
  margin-top: 3px;

  color: var(--color-gray);

  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
`;

/* ========================================
   MATCHING CARD
======================================== */

export const MatchingCard = styled.section`
  position: relative;

  width: 100%;

  margin-top: 22px;

  padding: 16px 20px;

  box-sizing: border-box;

  background: var(--color-white);

  border: 1px solid var(--color-light-light-gray);
  border-radius: 14px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const MatchingHeader = styled.div`
  width: 100%;

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

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--color-main);
`;

export const MatchingArrow = styled.span`
  color: var(--color-gray);

  font-size: 28px;
  font-weight: 400;
  line-height: 1;

  cursor: pointer;
`;

/* ========================================
   AFTER HOME - RADIUS
======================================== */

export const AfterRadius = styled.img`
  position: static;

  display: block;

  width: 180px;
  height: 180px;

  margin: 20px auto;

  flex-shrink: 0;

  object-fit: contain;

  pointer-events: none;
`;

/* ========================================
   RADIUS TEXT
======================================== */

export const RadiusText = styled.p`
  margin: 0;

  color: var(--color-gray);

  font-size: 12px;
  font-weight: 500;
  line-height: 160%;

  text-align: center;

  strong {
    color: var(--color-black);

    font-size: 17px;
    font-weight: 700;
  }
`;

export const MatchingDescription = styled.p`
  margin: 0;

  color: var(--color-gray);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  text-align: center;
`;

/* ========================================
   MATCHING STATS
======================================== */

export const MatchingStats = styled.div`
  width: 100%;

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

  min-width: 0;
`;

export const StatIcon = styled.img`
  width: auto;
  height: 24px;

  flex-shrink: 0;

  object-fit: contain;
`;

export const StatLabel = styled.span`
  margin-top: 10px;

  color: var(--color-gray);

  font-size: 12px;
  font-weight: 400;

  text-align: center;
`;

export const StatValue = styled.strong`
  margin-top: 4px;

  color: var(--color-black);

  font-size: 16px;
  font-weight: 600;

  text-align: center;
`;

export const StatDivider = styled.div`
  width: 1px;

  margin: 0 16px;

  background: var(--color-light-light-gray);
`;