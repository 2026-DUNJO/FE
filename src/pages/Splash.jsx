import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import wordmark from "../assets/dunjo-wordmark.svg";
import symbol from "../assets/dunjo-symbol.svg";

import {
  SplashContainer,
  LogoArea,
  Wordmark,
  Symbol,
} from "../styles/Splash.styles";

const Splash = () => {
  const navigate = useNavigate();
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsEnding(true);
    }, 2000);

    const navigateTimer = setTimeout(() => {
    }, 4000);

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