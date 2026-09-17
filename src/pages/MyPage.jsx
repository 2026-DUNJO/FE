import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import api from "../api/axios";

import dunjoSymbol from "../assets/dunjo-app.svg";
import spotifyIcon from "../assets/home/spotify.svg";

import {
  MyPageContainer,
  MyPageContent,

  ProfileCard,
  ProfileImage,
  ProfileSymbol,
  ProfileInfo,
  Nickname,
  UserId,

  SectionTitle,

  SettingList,
  SettingRow,
  SettingLeft,
  SpotifyCircle,
  SpotifyIcon,
  SettingName,
  ConnectedText,
  Arrow,

  Divider,
} from "../styles/MyPage.styles";

const MyPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nickname: "",
    userId: "",
    spotifyConnected: false,
  });

  const [isLoading, setIsLoading] = useState(true);

  /* ==============================
     마이페이지 데이터 조회
  ============================== */

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        setIsLoading(true);

        const [userResponse, spotifyResponse] = await Promise.all([
          api.get("/users/me"),
          api.get("/spotify/status"),
        ]);

        setUser({
          nickname: userResponse.data.nickname,
          userId: userResponse.data.userId,
          spotifyConnected: spotifyResponse.data.connected,
        });
      } catch (error) {
        console.error(
          "마이페이지 조회 실패:",
          error.response?.data || error
        );

        // 토큰이 만료됐거나 인증에 실패한 경우
        if (error.response?.status === 401) {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyPage();
  }, [navigate]);

  /* ==============================
     로그아웃
  ============================== */

  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <MyPageContainer>
      <MyPageContent>
        {/* HEADER */}
        <Header />

        {/* PROFILE */}
        <ProfileCard>
          <ProfileImage>
            <ProfileSymbol
              src={dunjoSymbol}
              alt=""
            />
          </ProfileImage>

          <ProfileInfo>
            <Nickname>
              {isLoading ? "불러오는 중..." : user.nickname}
            </Nickname>

            <UserId>
              {isLoading
                ? ""
                : `@${user.userId}`}
            </UserId>
          </ProfileInfo>
        </ProfileCard>

        {/* ACCOUNT */}
        <SectionTitle>
          계정 및 연동
        </SectionTitle>

        <SettingList>
          {/* SPOTIFY */}
          <SettingRow>
            <SettingLeft>
              <SpotifyCircle>
                <SpotifyIcon
                  src={spotifyIcon}
                  alt=""
                />
              </SpotifyCircle>

              <SettingName>
                Spotify
              </SettingName>
            </SettingLeft>

            <ConnectedText>
              {isLoading
                ? "확인 중..."
                : user.spotifyConnected
                  ? "연결됨"
                  : "연결 안 됨"}
            </ConnectedText>
          </SettingRow>

          <Divider />

          {/* LOGOUT */}
          <SettingRow
            as="button"
            type="button"
            onClick={handleLogout}
          >
            <SettingLeft>
              <SettingName>
                로그아웃
              </SettingName>
            </SettingLeft>

            <Arrow>
              ›
            </Arrow>
          </SettingRow>

          <Divider />
        </SettingList>
      </MyPageContent>

      {/* NAVBAR */}
      <NavBar />
    </MyPageContainer>
  );
};

export default MyPage;