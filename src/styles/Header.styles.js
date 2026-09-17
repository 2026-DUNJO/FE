import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: sticky;
`;

export const HeaderLogo = styled.img`
  width: 160px;
  height: auto;

  object-fit: contain;
`;

export const TasteText = styled.p`
  margin: 0;

  color: var(--color-gray);

  font-size: 12px;
  font-weight: 500;
  line-height: 116%;

  text-align: right;
`;

export const BellButton = styled.button`
  width: 32px;
  height: 32px;

  padding: 0;

  border: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const BellIcon = styled.img`
  width: 24px;
  height: 24px;

  object-fit: contain;
`;