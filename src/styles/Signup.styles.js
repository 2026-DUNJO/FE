import styled, { keyframes } from "styled-components";

/* =========================
    ANIMATION
========================= */

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

/* =========================
   COMMON
========================= */

export const SignupContent = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 0 28px;
`;

export const Logo = styled.img`
  position: absolute;

  top: 42px;
  left: 50%;

  width: 32px;
  height: auto;

  transform: translateX(-50%);
`;

export const Title = styled.h1`
  position: absolute;

  top: 128px;
  left: 28px;

  margin: 0;

  color: var(--color-black);

  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.6px;
`;

/* =========================
   INPUT
========================= */

export const InputSection = styled.div`
  position: absolute;

  top: ${({ $nickname }) => ($nickname ? "220px" : "192px")};
  left: 28px;
  right: 28px;

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const InputLabel = styled.label`
  color: var(--color-black);

  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;

  padding: 0;

  border: none;
  outline: none;

  background: transparent;

  color: var(--color-black);

  font-family: inherit;
  font-size: 20px;
  font-weight: 700;

  &::placeholder {
    color: var(--color-light-gray);
  }
`;

/* =========================
   PREVIOUS VALUES
========================= */

export const PreviousList = styled.div`
  position: absolute;

  top: 270px;
  left: 28px;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;

export const PreviousItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const PreviousLabel = styled.span`
  color: var(--color-black);

  font-size: 16px;
  font-weight: 500;
`;

export const PreviousValue = styled.strong`
  color: var(--color-black);

  font-size: 20px;
  font-weight: 700;
`;

/* =========================
   BOTTOM BUTTON
========================= */

export const BottomButtonArea = styled.div`
  position: absolute;

  left: 28px;
  right: 28px;
  bottom: 24px;

  display: flex;

  gap: 10px;
`;

export const BackButton = styled.button`
  width: 92px;
  min-width: 92px;
  height: 48px;

  padding: 0;

  border: 1px solid var(--color-black);
  border-radius: 3px;
  background: var(--color-white);

  color: var(--color-black);
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;

  white-space: nowrap;

  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export const NextButton = styled.button`
  min-width: 0;
  width: ${({ $full }) =>
    $full ? "100%" : "auto"};

  flex: ${({ $full }) =>
    $full ? "none" : "1"};

  height: 48px;

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "var(--color-black)"
        : "var(--color-light-gray)"};

  border-radius: 3px;

  background: ${({ $active }) =>
    $active
      ? "var(--color-black)"
      : "var(--color-white)"};

  color: ${({ $active }) =>
    $active
      ? "var(--color-white)"
      : "var(--color-light-gray)"};

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;

  cursor: ${({ $active }) =>
    $active ? "pointer" : "default"};

  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease;

  &:active {
    transform: ${({ $active }) =>
      $active ? "scale(0.98)" : "none"};
  }
`;

/* =========================
   TERMS OVERLAY
========================= */

export const Overlay = styled.div`
  position: absolute;

  inset: 0;

  z-index: 10;

  background: rgba(0, 0, 0, 0.65);
`;

export const TermsSheet = styled.section`
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  z-index: 20;

  padding: 30px 28px 28px;

  background: var(--color-white);
  border-radius: 24px 24px 0 0;

  animation: ${slideUp} 0.6s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`;

export const TermsTitle = styled.h2`
  margin: 0 0 20px;

  color: var(--color-black);

  font-size: 20px;
  font-weight: 700;
  line-height: 1.35;
`;

export const AllTermsButton = styled.button`
  width: 100%;

  height: 42px;

  padding: 0 12px;

  border: none;
  border-radius: 3px;

  background: #f5f5f5;

  display: flex;
  align-items: center;

  gap: 8px;

  color: var(--color-black);

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
`;

export const TermsList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 18px;

  padding: 20px 10px 30px;
`;

export const TermsItem = styled.button`
  display: flex;
  align-items: center;

  gap: 8px;

  padding: 0;

  border: none;

  background: transparent;
  
  color: var(--color-black);


  font-family: inherit;
  font-size: 12px;
  font-weight: 500;

  text-align: left;

  cursor: pointer;
`;

export const CheckBox = styled.span`
  width: 15px;
  height: 15px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid
    ${({ $checked }) =>
      $checked
        ? "var(--color-main)"
        : "var(--color-black)"};

  border-radius: 3px;

  background: ${({ $checked }) =>
    $checked
      ? "var(--color-main)"
      : "transparent"};

  color: var(--color-white);

  font-size: 10px;
`;

/* =========================
   COMPLETE
========================= */

export const CompleteContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 0 28px 28px;
`;

export const CompleteLogo = styled.img`
  position: absolute;

  top: 180px;
  left: 50%;

  width: 32px;
  height: auto;

  transform: translateX(-50%);
`;

export const CompleteText = styled.h1`
  position: absolute;

  top: 260px;
  left: 50%;

  width: 100%;

  transform: translateX(-50%);

  margin: 0;

  color: var(--color-black);

  font-size: 28px;
  font-weight: 700;
  line-height: 140%;

  text-align: center;
`;

export const PasswordGuide = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.4;
  color: ${({ $error }) =>
    $error ? "#E56458" : "var(--color-gray)"};
`;