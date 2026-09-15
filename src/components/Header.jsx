import dunjoLogo from "../assets/dunjo-logo.svg";
import bellIcon from "../assets/home/bell.svg";

import {
  HeaderContainer,
  HeaderLogo,
  TasteText,
  BellButton,
  BellIcon,
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
        <BellButton
          type="button"
          onClick={onBellClick}
          aria-label="알림"
        >
          <BellIcon
            src={bellIcon}
            alt=""
          />
        </BellButton>
      )}
    </HeaderContainer>
  );
};

export default Header;