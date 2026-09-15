import styled, { css, keyframes } from "styled-components";

/* ========================================
   SEARCH PAGE
======================================== */

export const SearchContainer = styled.main`
  position: relative;

  width: 390px;
  max-width: 100%;
  height: 100dvh;

  background: var(--color-white);

  overflow: hidden;
`;

export const SearchContent = styled.div`
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
   SEARCH TITLE
======================================== */

export const SearchTop = styled.div`
  position: relative;

  width: 100%;

  margin-top: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.button`
  position: absolute;

  left: 0;
  top: 50%;

  padding: 0;

  border: none;
  background: transparent;

  color: var(--color-gray);

  font-family: inherit;
  font-size: 34px;
  font-weight: 400;
  line-height: 1;

  transform: translateY(-50%);

  cursor: pointer;
`;

export const SearchTitle = styled.h1`
  margin: 0;

  color: var(--color-black);

  font-size: 20px;
  font-weight: 500;
  line-height: 160%;

  text-align: center;
`;

/* ========================================
   SEARCH INFO
======================================== */

export const SearchInfo = styled.div`
  margin-top: 26px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4px;
`;

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
  line-height: 160%;

  text-align: center;
`;

/* ========================================
   RADAR ANIMATION
======================================== */

/*
  레이더 원:
  너무 크게 움직이지 않고
  살짝 확대 + 밝기 변화
*/

const ringPulse = keyframes`
  0% {
    opacity: 0.45;
    transform: scale(0.985);
  }

  45% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0.45;
    transform: scale(0.985);
  }
`;

/*
  리스너 점:
  탐지되는 느낌으로
  크기와 opacity가 조금씩 변화
*/

const pointPulse = keyframes`
  0%,
  100% {
    opacity: 0.22;
    transform: scale(0.9);
  }

  45% {
    opacity: 0.75;
    transform: scale(1.15);
  }

  65% {
    opacity: 0.48;
    transform: scale(1);
  }
`;

/*
  중앙점:
  아주 미세한 pulse
*/

const centerPulse = keyframes`
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
`;

/*
  중앙에서 작은 신호가
  퍼지는 효과
*/

const centerWave = keyframes`
  0% {
    opacity: 0.28;
    transform: scale(1);
  }

  70% {
    opacity: 0;
    transform: scale(2.6);
  }

  100% {
    opacity: 0;
    transform: scale(2.6);
  }
`;

/* ========================================
   RADAR
======================================== */

export const RadarWrapper = styled.div`
  width: 240px;
  height: 240px;

  margin: 28px auto 48px auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadarSvg = styled.svg`
  display: block;

  width: 240px;
  height: 240px;

  overflow: visible;
`;

/* ========================================
   RADAR RINGS
======================================== */

export const RadarRing = styled.circle`
  stroke-width: 0.5px;

  transform-box: fill-box;
  transform-origin: center;

  transition:
    fill 0.5s ease,
    stroke 0.5s ease,
    opacity 0.5s ease;

  ${({ $paused, $delay }) =>
    $paused
      ? css`
          fill: var(--color-light-light-gray);
          stroke: var(--color-light-gray);

          opacity: 0.4;

          animation: none;

          transform: scale(1);
        `
      : css`
          fill: rgba(229, 100, 88, 0.05);
          stroke: rgba(229, 100, 88, 0.24);

          animation: ${ringPulse} 3.2s ease-in-out infinite;

          animation-delay: ${$delay};
        `}
`;

/* ========================================
   LISTENER POINTS
======================================== */

export const RadarPoint = styled.circle`
  transform-box: fill-box;
  transform-origin: center;

  transition:
    fill 0.5s ease,
    opacity 0.5s ease;

  ${({ $paused, $delay }) =>
    $paused
      ? css`
          fill: var(--color-light-gray);

          opacity: 0.35;

          animation: none;

          transform: scale(1);
        `
      : css`
          fill: var(--color-main);

          animation: ${pointPulse} 2.8s ease-in-out infinite;

          animation-delay: ${$delay};
        `}
`;

/* ========================================
   CENTER WAVE
======================================== */

export const RadarCenterWave = styled.circle`
  fill: transparent;

  transform-box: fill-box;
  transform-origin: center;

  transition:
    stroke 0.5s ease,
    opacity 0.5s ease;

  ${({ $paused }) =>
    $paused
      ? css`
          stroke: var(--color-light-gray);
          stroke-width: 1px;

          opacity: 0;

          animation: none;
        `
      : css`
          stroke: var(--color-main);
          stroke-width: 1px;

          animation: ${centerWave} 2.6s ease-out infinite;
        `}
`;

/* ========================================
   CENTER POINT
======================================== */

export const RadarCenter = styled.circle`
  transform-box: fill-box;
  transform-origin: center;

  transition:
    fill 0.5s ease,
    opacity 0.5s ease;

  ${({ $paused }) =>
    $paused
      ? css`
          fill: var(--color-gray);

          opacity: 0.65;

          animation: none;

          transform: scale(1);
        `
      : css`
          fill: var(--color-main);

          opacity: 1;

          animation: ${centerPulse} 2.2s ease-in-out infinite;
        `}
`;

/* ========================================
   MATCHING STATS
======================================== */

export const MatchingStats = styled.div`
  width: 100%;

  /*
    ★ 레이더 ↔ stats 사이 간격은
    여기 하나로 관리
  */
  margin-top: 48px;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const StatItem = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
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

  white-space: nowrap;

  text-align: center;
`;

export const StatValue = styled.strong`
  margin-top: 4px;

  color: var(--color-black);

  font-size: 16px;
  font-weight: 600;

  white-space: nowrap;

  text-align: center;
`;

export const StatDivider = styled.div`
  width: 1px;

  margin: 0 12px;

  background: var(--color-light-light-gray);
`;

/* ========================================
   SEARCH CONTROL BUTTON
======================================== */

export const SearchToggleButton = styled.button`
  width: 100%;
  height: 48px;

  margin-top: 32px;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.15s ease;

  ${({ $paused }) =>
    $paused
      ? css`
          border: 1px solid var(--color-main);

          background: var(--color-main);
          color: var(--color-white);
        `
      : css`
          border: 1px solid var(--color-gray);

          background: var(--color-white);
          color: var(--color-black);
        `}

  &:active {
    transform: scale(0.98);
  }
`;

/* ========================================
   PAUSE ICON
======================================== */

export const PauseIcon = styled.span`
  display: flex;
  align-items: center;

  gap: 3px;

  span {
    width: 3px;
    height: 12px;

    border-radius: 1px;

    background: currentColor;
  }
`;

/* ========================================
   PLAY ICON
======================================== */

export const PlayIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: currentColor;

  font-size: 11px;
  line-height: 1;
`;