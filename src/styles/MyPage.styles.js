import styled from "styled-components";

/* ========================================
   MY PAGE
======================================== */

export const MyPageContainer = styled.main`
  position: relative;

  width: 390px;
  max-width: 100%;
  height: 100dvh;

  background: var(--color-white);

  overflow: hidden;
`;

export const MyPageContent = styled.div`
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
   PROFILE
======================================== */

export const ProfileCard = styled.section`
  width: 100%;
  min-height: 88px;

  margin-top: 36px;
  padding: 14px 16px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  gap: 20px;

  background: var(--color-white);

  border: 1px solid var(--color-light-light-gray);
  border-radius: 14px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const ProfileImage = styled.div`
  width: 58px;
  height: 58px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-black);

  border-radius: 50%;
`;

export const ProfileSymbol = styled.img`
  width: 28px;
  height: auto;

  object-fit: contain;
`;

export const ProfileInfo = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Nickname = styled.strong`
  color: var(--color-black);

  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
`;

export const UserId = styled.span`
  color: var(--color-gray);

  font-size: 14px;
  font-weight: 400;
`;

/* ========================================
   SECTION
======================================== */

export const SectionTitle = styled.h2`
  margin: 22px 0 0;

  color: var(--color-black);

  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

/* ========================================
   SETTINGS
======================================== */

export const SettingList = styled.div`
  width: 100%;

  margin-top: 12px;
`;

export const SettingRow = styled.div`
  width: 100%;
  min-height: 66px;

  padding: 0 4px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;

  background: transparent;

  font-family: inherit;

  text-align: left;
`;

export const SettingLeft = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const SpotifyCircle = styled.div`
  width: 36px;
  height: 36px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-black);

  border-radius: 50%;
`;

export const SpotifyIcon = styled.img`
  width: 24px;
  height: 24px;

  object-fit: contain;
`;

export const SettingName = styled.span`
  color: var(--color-black);

  font-size: 16px;
  font-weight: 600;
`;

export const ConnectedText = styled.span`
  color: var(--color-light-gray);

  font-size: 16px;
  font-weight: 600;
`;

export const Arrow = styled.span`
  color: var(--color-gray);

  font-size: 28px;
  font-weight: 400;
  line-height: 1;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: var(--color-light-light-gray);
`;