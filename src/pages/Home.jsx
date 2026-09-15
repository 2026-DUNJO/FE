import { useState } from "react";

import BeforeHome from "../components/home/BeforeHome";
import AfterHome from "../components/home/AfterHome";

import { HomeContainer } from "../styles/Home.styles";

const Home = () => {
  // ========================================
  // UI 개발용
  // false = Spotify 연결 전
  // true  = Spotify 연결 후
  // ========================================
  const [isSpotifyConnected] = useState(true);

  return (
    <HomeContainer>
      {isSpotifyConnected ? (
        <AfterHome />
      ) : (
        <BeforeHome />
      )}
    </HomeContainer>
  );
};

export default Home;