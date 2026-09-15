import wordmark from "../../assets/dunjo-wordmark.svg";

import bellIcon from "../../assets/home/bell.svg";
import listenerIcon from "../../assets/home/listener.svg";
import similarityIcon from "../../assets/home/similarity.svg";

import NavBar from "../NavBar";

import {
  AfterContainer,
  AfterContent,
  HomeHeader,
  HomeWordmark,
  BellButton,

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

  RadarArea,
  RadarOuter,
  RadarMiddle,
  RadarInner,
  RadarDot,

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
  // TODO: 나중에 백엔드 + Spotify 데이터로 변경
  const currentTrack = {
    title: "like JENNIE",
    artist: "제니 (JENNIE)",
    albumImage: "",
  };

  // TODO: 나중에 백엔드 데이터로 변경
  const matchingData = {
    radius: 1,
    listenerCount: 12,
    similarity: 70,
  };

  return (
    <AfterContainer>
      <AfterContent>

        {/* HEADER */}
        <HomeHeader>
          <HomeWordmark
            src={wordmark}
            alt="DUNJO"
          />

          <BellButton type="button">
            <BellIcon
              src={bellIcon}
              alt="알림"
            />
          </BellButton>
        </HomeHeader>


        {/* CURRENT TRACK */}
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


        {/* MATCHING */}
        <MatchingCard>

          <MatchingHeader>
            <MatchingStatus>
              <StatusDot />

              MATCHING ON
            </MatchingStatus>

            <MatchingArrow>
              ›
            </MatchingArrow>
          </MatchingHeader>


          {/* RADAR */}
          <RadarArea>
            <RadarOuter>
              <RadarMiddle>
                <RadarInner>
                  <RadarDot />
                </RadarInner>
              </RadarMiddle>
            </RadarOuter>
          </RadarArea>


          <RadiusText>
            <strong>
              {matchingData.radius}km
            </strong>

            {" "}안에서
          </RadiusText>


          <MatchingDescription>
            음악적으로 연결되는 사람을 찾고 있습니다.
          </MatchingDescription>


          {/* MATCHING INFO */}
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