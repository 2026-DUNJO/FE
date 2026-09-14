import { useNavigate } from "react-router-dom";

import logo from "../assets/dunjo-logo.svg";

import {
  SelectContainer,
  TopLogo,
  BottomLogo,
  ButtonArea,
  LoginButton,
  SignupButton,
} from "../styles/Select.styles";

const Select = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <SelectContainer>
      <TopLogo
        src={logo}
        alt="DUNJO"
      />

      <ButtonArea>
        <LoginButton onClick={handleLogin}>
          로그인
        </LoginButton>

        <SignupButton onClick={handleSignup}>
          회원가입
        </SignupButton>
      </ButtonArea>

      <BottomLogo
        src={logo}
        alt=""
      />
    </SelectContainer>
  );
};

export default Select;