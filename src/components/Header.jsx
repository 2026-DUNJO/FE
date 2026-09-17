import dunjoLogo from "../assets/dunjo-logo.svg";

import {
  HeaderContainer,
  HeaderLogo,
  TasteText,
} from "../styles/Header.styles";

const Header = ({ variant = "bell", onBellClick }) => {
  return (
    <HeaderContainer>
      <HeaderLogo
        src={dunjoLogo}
        alt="DUNJO"
      />

      {variant === "taste" ? (
        <TasteText>
          THROW
          <br />
          YOUR
          <br />
          TASTE
        </TasteText>
      ) : (
          <TasteText>
          THROW
          <br />
          YOUR
          <br />
          TASTE
        </TasteText>
      )}
    </HeaderContainer>
  );
};

export default Header;