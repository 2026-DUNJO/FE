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
  Overlay,
  TermsSheet,
  TermsTitle,
  TermsList,
  TermsItem,
  AllTermsButton,
  CheckBox,
  CompleteContainer,
  CompleteLogo,
  CompleteText,
} from "../styles/Signup.styles";

const Signup = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });

  const [terms, setTerms] = useState({
    age: false,
    privacy: false,
    location: false,
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
    setStep((prev) => prev - 1);
  };

  const allTermsChecked =
    terms.age &&
    terms.privacy &&
    terms.location;

  const toggleAllTerms = () => {
    const nextValue = !allTermsChecked;

    setTerms({
      age: nextValue,
      privacy: nextValue,
      location: nextValue,
    });
  };

  const toggleTerm = (key) => {
    setTerms((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
          <Logo src={symbol} alt="DUNJO" />

          <Title>
            아이디를 입력해주세요.
          </Title>

          <InputSection>
            <InputLabel htmlFor="userId">
              아이디
            </InputLabel>

            <Input
              id="userId"
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
          <Logo src={symbol} alt="DUNJO" />

          <Title>
            비밀번호를 입력해주세요.
          </Title>

          <InputSection>
            <InputLabel htmlFor="password">
              비밀번호
            </InputLabel>

            <Input
              id="password"
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
     STEP 3 : PASSWORD CONFIRM
  ========================= */

  if (step === 3) {
    const isValid =
      formData.passwordConfirm.length > 0 &&
      formData.passwordConfirm ===
        formData.password;

    return (
      <PageContainer>
        <SignupContent>
          <Logo src={symbol} alt="DUNJO" />

          <Title>
            비밀번호를 확인해주세요.
          </Title>

          <InputSection>
            <InputLabel htmlFor="passwordConfirm">
              비밀번호 확인
            </InputLabel>

            <Input
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호"
              value={
                formData.passwordConfirm
              }
              onChange={(e) =>
                updateForm(
                  "passwordConfirm",
                  e.target.value
                )
              }
              autoFocus
            />
          </InputSection>

          <PreviousList>
            <PreviousItem>
              <PreviousLabel>
                비밀번호
              </PreviousLabel>

              <PreviousValue>
                {"*".repeat(
                  formData.password.length
                )}
              </PreviousValue>
            </PreviousItem>

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
     STEP 4 : NICKNAME
  ========================= */

  if (step === 4) {
    const isValid =
      formData.nickname.trim().length > 0;

    return (
      <PageContainer>
        <SignupContent>
          <Logo src={symbol} alt="DUNJO" />

          <Title>
            닉네임을 입력해주세요.
          </Title>

          <InputSection>
            <InputLabel htmlFor="nickname">
              닉네임
            </InputLabel>

            <Input
              id="nickname"
              type="text"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={(e) =>
                updateForm(
                  "nickname",
                  e.target.value
                )
              }
              autoFocus
            />
          </InputSection>

          <PreviousList>
            <PreviousItem>
              <PreviousLabel>
                비밀번호 확인 ✅
              </PreviousLabel>

              <PreviousValue>
                {"*".repeat(
                  formData.passwordConfirm
                    .length
                )}
              </PreviousValue>
            </PreviousItem>

            <PreviousItem>
              <PreviousLabel>
                비밀번호
              </PreviousLabel>

              <PreviousValue>
                {"*".repeat(
                  formData.password.length
                )}
              </PreviousValue>
            </PreviousItem>

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
     STEP 5 : TERMS
  ========================= */

  if (step === 5) {
    return (
      <PageContainer>
        {/* 뒤에 기존 닉네임 화면이 보이도록 */}
        <SignupContent>
          <Logo src={symbol} alt="DUNJO" />

          <Title>
            닉네임을 입력해주세요.
          </Title>

          <InputSection>
            <InputLabel>
              닉네임
            </InputLabel>

            <PreviousValue>
              {formData.nickname}
            </PreviousValue>
          </InputSection>

          <PreviousList>
            <PreviousItem>
              <PreviousLabel>
                비밀번호 확인 ✅
              </PreviousLabel>

              <PreviousValue>
                {"*".repeat(
                  formData.passwordConfirm
                    .length
                )}
              </PreviousValue>
            </PreviousItem>

            <PreviousItem>
              <PreviousLabel>
                비밀번호
              </PreviousLabel>

              <PreviousValue>
                {"*".repeat(
                  formData.password.length
                )}
              </PreviousValue>
            </PreviousItem>

            <PreviousItem>
              <PreviousLabel>
                아이디
              </PreviousLabel>

              <PreviousValue>
                {formData.userId}
              </PreviousValue>
            </PreviousItem>
          </PreviousList>
        </SignupContent>

        <Overlay onClick={handleBack} />

        <TermsSheet>
          <TermsTitle>
            서비스 이용을 위해
            <br />
            아래 동의가 필요합니다.
          </TermsTitle>

          <AllTermsButton
            type="button"
            onClick={toggleAllTerms}
          >
            <CheckBox $checked={allTermsChecked}>
              {allTermsChecked ? "✓" : ""}
            </CheckBox>

            모두 동의합니다.
          </AllTermsButton>

          <TermsList>
            <TermsItem
              type="button"
              $checked={terms.age}
              onClick={() =>
                toggleTerm("age")
              }
            >
              <CheckBox
                $checked={terms.age}
              >
                {terms.age ? "✓" : ""}
              </CheckBox>

              [필수] 만 14세 이상
            </TermsItem>

            <TermsItem
              type="button"
                $checked={terms.privacy}
              onClick={() =>
                toggleTerm("privacy")
              }
            >
              <CheckBox
                $checked={terms.privacy}
              >
                {terms.privacy ? "✓" : ""}
              </CheckBox>

              [필수] 개인정보 수집 이용
            </TermsItem>

            <TermsItem
              type="button"
                $checked={terms.location}
              onClick={() =>
                toggleTerm("location")
              }
            >
              <CheckBox
                $checked={terms.location}
              >
                {terms.location ? "✓" : ""}
              </CheckBox>

              [필수] 위치 권한
            </TermsItem>
          </TermsList>

          <NextButton
            type="button"
            $full
            $active={allTermsChecked}
            disabled={!allTermsChecked}
            onClick={handleNext}
          >
            다음
          </NextButton>
        </TermsSheet>
      </PageContainer>
    );
  }

  /* =========================
     STEP 6 : COMPLETE
  ========================= */

return (
  <PageContainer>
    <CompleteContainer>
      <CompleteLogo
        src={symbol}
        alt="DUNJO"
      />

      <CompleteText>
        환영합니다
        <br />
        {formData.nickname}
      </CompleteText>

      <BottomButtonArea>
        <NextButton
          type="button"
          $full
          $active
          onClick={() => navigate("/home")}
        >
          시작하기
        </NextButton>
      </BottomButtonArea>
    </CompleteContainer>
  </PageContainer>
);
};

export default Signup;