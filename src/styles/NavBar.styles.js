import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;

  left: 50%;
  bottom: 0;

  z-index: 100;

  width: 390px;
  max-width: 100%;

  height: 78px;

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 8px 12px 10px;

  background: var(--color-white);

  border-radius: 24px 24px 0 0;

  box-shadow: 0 -4px 14px rgba(0, 0, 0, 0.08);
`;

export const NavItem = styled.button`
  flex: 1;

  height: 100%;

  padding: 0;

  border: none;

  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;

  font-family: inherit;

  cursor: pointer;
`;

export const NavIcon = styled.img`
  width: 20px;
  height: 20px;

  object-fit: contain;
`;

export const NavLabel = styled.span`
    margin-top: 4px;
  color: ${({ $active }) =>
    $active
      ? "var(--color-black)"
      : "var(--color-light-gray)"};

  font-size: 12px;
  font-weight: ${({ $active }) =>
    $active ? 700 : 500};

  line-height: 1;
`;

export const NavNotificationBadge = styled.span`
  position: absolute;

  top: 4px;
  left: 50%;

  /* 숫자가 클수록 오른쪽으로 이동 */
  transform: translateX(48px);

  min-width: 17px;
  height: 17px;
  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  border: 2px solid #ffffff;
  border-radius: 999px;

  background: #e56458;
  color: #ffffff;

  font-size: 10px;
  font-weight: 700;
  line-height: 1;

  pointer-events: none;
`;