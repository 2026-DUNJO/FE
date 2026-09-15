import Header from "../components/Header";
import NavBar from "../components/NavBar";

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
  // TODO: 나중에 로그인한 사용자 데이터로 변경
  const user = {
    nickname: "닉네임",
    userId: "@testtest",
    spotifyConnected: true,
  };

  const handleLogout = () => {
    console.log("로그아웃");

    // TODO: 백엔드 연결 후
    // 1. 토큰 삭제
    // 2. 로그아웃 처리
    // 3. 로그인/Select 화면으로 이동
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
              {user.nickname}
            </Nickname>

            <UserId>
              {user.userId}
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
              {user.spotifyConnected ? "연결됨" : "연결 안 됨"}
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