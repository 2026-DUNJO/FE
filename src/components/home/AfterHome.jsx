import listenerIcon from "../../assets/home/listener.svg";
import similarityIcon from "../../assets/home/similarity.svg";
import afterRadius from "../../assets/home/after_radius.svg";

import NavBar from "../NavBar";
import Header from "../Header";

import {
  AfterContainer,
  AfterContent,
  AfterRadius,

  NowPlayingCard,
  AlbumCover,
  TrackContent,
  NowPlayingLabel,
  TrackTitle,
  TrackArtist,

  MatchingCard,
  MatchingHeader,
  MatchingStatus,
  StatusDot,
  MatchingArrow,

  RadiusText,
  MatchingDescription,

  MatchingStats,
  StatItem,
  StatIcon,
  StatLabel,
  StatValue,
  StatDivider,
} from "../../styles/Home.styles";

const AfterHome = () => {
  // TODO: Spotify API 연결 후 실제 데이터로 변경
  const currentTrack = {
    title: "like JENNIE",
    artist: "제니 (JENNIE)",
    albumImage: "",
  };

  // TODO: 백엔드 연결 후 실제 데이터로 변경
  const matchingData = {
    radius: 1,
    listenerCount: 12,
    similarity: 70,
  };

  return (
    <AfterContainer>
      <AfterContent>
        {/* HEADER */}
        <Header />

        {/* 현재 재생곡 */}
        <NowPlayingCard>
          <AlbumCover>
            {currentTrack.albumImage && (
              <img
                src={currentTrack.albumImage}
                alt={currentTrack.title}
              />
            )}
          </AlbumCover>

          <TrackContent>
            <NowPlayingLabel>
              현재 재생곡
            </NowPlayingLabel>

            <TrackTitle>
              {currentTrack.title}
            </TrackTitle>

            <TrackArtist>
              {currentTrack.artist}
            </TrackArtist>
          </TrackContent>
        </NowPlayingCard>

        {/* MATCHING CARD */}
        <MatchingCard>
          <MatchingHeader>
            <MatchingStatus>
              <StatusDot />
              MATCHING ON
            </MatchingStatus>
          </MatchingHeader>

          {/* 레이더 */}
          <AfterRadius
            src={afterRadius}
            alt=""
          />

          {/* 반경 */}
          <RadiusText>
            <strong>{matchingData.radius}km</strong>
            {" "}안에서
          </RadiusText>

          <MatchingDescription>
            음악적으로 연결되는 사람을 찾고 있습니다.
          </MatchingDescription>

          {/* 매칭 정보 */}
          <MatchingStats>
            <StatItem>
              <StatIcon
                src={listenerIcon}
                alt=""
              />

              <StatLabel>
                주변 리스너
              </StatLabel>

              <StatValue>
                {matchingData.listenerCount}명
              </StatValue>
            </StatItem>

            <StatDivider />

            <StatItem>
              <StatIcon
                src={similarityIcon}
                alt=""
              />

              <StatLabel>
                음악적 유사도
              </StatLabel>

              <StatValue>
                {matchingData.similarity}% 이상
              </StatValue>
            </StatItem>
          </MatchingStats>
        </MatchingCard>
      </AfterContent>

      <NavBar />
    </AfterContainer>
  );
};

export default AfterHome;