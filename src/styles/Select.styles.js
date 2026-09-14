import styled from "styled-components";

export const SelectContainer = styled.main`
  position: relative;

  width: 100%;
  height: 100dvh;

  min-height: 700px;

  background: var(--color-white);

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/* =========================
   TOP LOGO
========================= */

export const TopLogo = styled.img`
  position: absolute;

  top: 10px;
  left: 50%;

  transform: translateX(-50%);

  width: 410px;
  max-width: none;

  user-select: none;
  pointer-events: none;
`;

/* =========================
   BUTTON AREA
========================= */

export const ButtonArea = styled.div`
  position: relative;
  z-index: 2;

  width: calc(100% - 56px);
  max-width: 334px;

  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 54px;

  border-radius: 4px;

  background: var(--color-black);
  color: var(--color-white);

  font-size: 22px;
  font-weight: 500;

  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 54px;

  border: 1.5px solid var(--color-black);
  border-radius: 4px;

  background: var(--color-white);
  color: var(--color-black);

  font-size: 22px;
  font-weight: 500;

  transition:
    transform 0.15s ease,
    background 0.15s ease;

  &:active {
    transform: scale(0.98);
    background: var(--color-light-light-gray);
  }
`;

/* =========================
   BOTTOM LOGO
========================= */

export const BottomLogo = styled.img`
  position: absolute;

  bottom: 10px;
  left: 50%;

  transform: translateX(-50%);

  width: 410px;
  max-width: none;

  user-select: none;
  pointer-events: none;
`;