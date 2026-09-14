import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import wordmark from "../../assets/logo/dunjo-wordmark.svg";
import symbol from "../../assets/logo/dunjo-symbol.svg";

import {
  SplashContainer,
  LogoArea,
  Wordmark,
  Symbol,
} from "./Splash.styles";

const Splash = () => {
  const navigate = useNavigate();
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsEnding(true);
    }, 2000);

    const navigateTimer = setTimeout(() => {
      navigate("/home");
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <SplashContainer $isEnding={isEnding}>
      <LogoArea>
        <Wordmark
          src={wordmark}
          alt="DUNJO"
        />

        <Symbol
          src={symbol}
          alt=""
        />
      </LogoArea>
    </SplashContainer>
  );
};

export default Splash;