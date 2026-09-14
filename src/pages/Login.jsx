import { useState } from "react";
import { useNavigate } from "react-router-dom";

import symbol from "../assets/dunjo-symbol.svg";

import { PageContainer } from "../styles/Common.styles";

import {
  SignupContent,
  Logo,
  Title,
  InputSection,
  InputLabel,
  Input,
  PreviousList,
  PreviousItem,
  PreviousLabel,
  PreviousValue,
  BottomButtonArea,
  BackButton,
  NextButton,
} from "../styles/Signup.styles";

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const updateForm = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/select");
      return;
    }

    setStep((prev) => prev - 1);
  };

  const handleLogin = () => {
    // 나중에 로그인 API 연결
    console.log("로그인 정보", formData);

    navigate("/home");
  };

  /* =========================
     STEP 1 : ID
  ========================= */

  if (step === 1) {
    const isValid =
      formData.userId.trim().length > 0;

    return (
      <PageContainer>
        <SignupContent>
          <Logo
            src={symbol}
            alt="DUNJO"
          />

          <Title>
            아이디를 입력해주세요.
          </Title>

          <InputSection>
            <InputLabel htmlFor="loginUserId">
              아이디
            </InputLabel>

            <Input
              id="loginUserId"
              type="text"
              placeholder="아이디"
              value={formData.userId}
              onChange={(e) =>
                updateForm(
                  "userId",
                  e.target.value
                )
              }
              autoFocus
            />
          </InputSection>

          <BottomButtonArea>
            <NextButton
              type="button"
              $full
              $active={isValid}
              disabled={!isValid}
              onClick={handleNext}
            >
              다음
            </NextButton>
          </BottomButtonArea>
        </SignupContent>
      </PageContainer>
    );
  }

  /* =========================
     STEP 2 : PASSWORD
  ========================= */

  if (step === 2) {
    const isValid =
      formData.password.length > 0;

    return (
      <PageContainer>
        <SignupContent>
          <Logo
            src={symbol}
            alt="DUNJO"
          />

          <Title>
            비밀번호를 입력해주세요.
          </Title>

          <InputSection>
            <InputLabel htmlFor="loginPassword">
              비밀번호
            </InputLabel>

            <Input
              id="loginPassword"
              type="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={(e) =>
                updateForm(
                  "password",
                  e.target.value
                )
              }
              autoFocus
            />
          </InputSection>

          <PreviousList>
            <PreviousItem>
              <PreviousLabel>
                아이디
              </PreviousLabel>

              <PreviousValue>
                {formData.userId}
              </PreviousValue>
            </PreviousItem>
          </PreviousList>

          <BottomButtonArea>
            <BackButton
              type="button"
              onClick={handleBack}
            >
              뒤로
            </BackButton>

            <NextButton
              type="button"
              $active={isValid}
              disabled={!isValid}
              onClick={handleLogin}
            >
              로그인
            </NextButton>
          </BottomButtonArea>
        </SignupContent>
      </PageContainer>
    );
  }

  return null;
};

export default Login;