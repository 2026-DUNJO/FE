import styled, { keyframes } from "styled-components";

const eraseWord = keyframes`
  0% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    clip-path: inset(0 0 0 100%);
    opacity: 0;
  }
`;

const moveSymbol = keyframes`
  0% {
    left: 270px;
    transform: translateY(-50%);
  }

  100% {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const SplashContainer = styled.main`
  position: fixed;
  inset: 0;
  z-index: 9999;

  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #262626;
  overflow: hidden;

  opacity: ${({ $isEnding }) => ($isEnding ? 0 : 1)};
  visibility: ${({ $isEnding }) => ($isEnding ? "hidden" : "visible")};

  transition:
    opacity 0.4s ease,
    visibility 0.4s ease;
`;

export const LogoArea = styled.div`
  position: relative;

  width: 320px;
  height: 80px;
`;

export const Wordmark = styled.img`
  position: absolute;

  top: 50%;
  left: 0;

  width: 260px;
  height: auto;

  transform: translateY(-50%);

  animation: ${eraseWord} 1s
    cubic-bezier(0.76, 0, 0.24, 1)
    forwards;

  animation-delay: 0.7s;
`;

export const Symbol = styled.img`
  position: absolute;

  top: 50%;
  left: 270px;

  width: 45px;
  height: auto;

  transform: translateY(-50%);

  animation: ${moveSymbol} 1s
    cubic-bezier(0.76, 0, 0.24, 1)
    forwards;

  animation-delay: 0.7s;
`;