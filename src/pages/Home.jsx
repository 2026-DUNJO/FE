import { useEffect, useState } from "react";

import api from "../api/axios";

import BeforeHome from "../components/home/BeforeHome";
import AfterHome from "../components/home/AfterHome";

import { HomeContainer } from "../styles/Home.styles";

const Home = () => {
  const [isSpotifyConnected, setIsSpotifyConnected] =
    useState(null);

  useEffect(() => {
    const checkSpotifyConnection = async () => {
      try {
        const response = await api.get(
          "/spotify/status"
        );

        console.log(
          "Spotify 연결 상태",
          response.data
        );

        setIsSpotifyConnected(
          response.data.connected
        );
      } catch (error) {
        console.error(
          "Spotify 연결 상태 확인 실패",
          error.response?.data || error
        );

        setIsSpotifyConnected(false);
      }
    };

    checkSpotifyConnection();
  }, []);

  // Spotify 연결 상태 확인 중
  if (isSpotifyConnected === null) {
    return null;
  }

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