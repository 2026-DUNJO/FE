import { useState } from "react";

import Header from "../Header";
import api from "../../api/axios";

import tasteIcon from "../../assets/home/taste.svg";
import nearbyIcon from "../../assets/home/nearby.svg";
import connectIcon from "../../assets/home/connect.svg";
import spotifyIcon from "../../assets/home/spotify.svg";
import beforeRadius from "../../assets/home/before_radius.svg";

import {
  BeforeContainer,
  BeforeRadius,
  IntroSection,
  IntroTitle,
  ThrowTextWrapper,
  IntroDescription,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  SpotifyButton,
  SpotifyIcon,
} from "../../styles/Home.styles";

const BeforeHome = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSpotifyConnect = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const response = await api.get(
        "/spotify/login"
      );

      console.log(
        "Spotify 로그인 URL",
        response.data
      );

      // 백엔드가 만들어준 Spotify OAuth 페이지로 이동
      window.location.href =
        response.data.url;
    } catch (error) {
      console.error(
        "Spotify 연결 실패",
        error.response?.data || error
      );

      const message =
        error.response?.data?.message ||
        "Spotify 연결을 시작하지 못했습니다.";

      alert(
        Array.isArray(message)
          ? message.join("\n")
          : message
      );

      setIsLoading(false);
    }
  };

  return (
    <BeforeContainer>
      <Header variant="taste" />

      <IntroSection>
        <IntroTitle>
          음악에
          <br />
          운명을{" "}
          <ThrowTextWrapper>
            <strong>던져!</strong>

            <BeforeRadius
              src={beforeRadius}
              alt=""
            />
          </ThrowTextWrapper>
        </IntroTitle>

        <IntroDescription>
          지금, 당신의 플레이리스트가
          <br />
          새로운 만남을 만들어줄지도 몰라요.
        </IntroDescription>
      </IntroSection>

      <FeatureList>
        <FeatureItem>
          <FeatureIcon
            src={tasteIcon}
            alt=""
          />

          <FeatureContent>
            <FeatureTitle>
              취향이 닿는 사람들
            </FeatureTitle>

            <FeatureDescription>
              내가 좋아하는 음악으로
              <br />
              가까운 사람을 발견합니다.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon
            src={nearbyIcon}
            alt=""
          />

          <FeatureContent>
            <FeatureTitle>
              지금, 이 근처에서
            </FeatureTitle>

            <FeatureDescription>
              일정 반경 내 비슷한 음악 취향의
              <br />
              사용자로부터 알림이 옵니다.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon
            src={connectIcon}
            alt=""
          />

          <FeatureContent>
            <FeatureTitle>
              우연이 만드는 연결
            </FeatureTitle>

            <FeatureDescription>
              익숙한 하루에 새로운 만남을
              <br />
              던져보세요.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>
      </FeatureList>

      <SpotifyButton
        type="button"
        onClick={handleSpotifyConnect}
        disabled={isLoading}
      >
        <SpotifyIcon
          src={spotifyIcon}
          alt=""
        />

        {isLoading
          ? "Spotify 연결 중..."
          : "Spotify로 시작하기"}
      </SpotifyButton>
    </BeforeContainer>
  );
};

export default BeforeHome;