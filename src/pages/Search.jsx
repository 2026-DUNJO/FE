import { useState } from "react";
import { useNavigate } from "react-router-dom";

import listenerIcon from "../assets/home/listener.svg";
import locationIcon from "../assets/home/location.svg";
import similarityIcon from "../assets/home/similarity.svg";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import {
  SearchContainer,
  SearchContent,

  SearchTop,
  BackButton,
  SearchTitle,

  SearchInfo,
  RadiusText,
  MatchingDescription,

  RadarWrapper,
  RadarSvg,
  RadarRing,
  RadarPoint,
  RadarCenter,
  RadarCenterWave,

  MatchingStats,
  StatItem,
  StatIcon,
  StatLabel,
  StatValue,
  StatDivider,

  SearchToggleButton,
  PauseIcon,
  PlayIcon,
} from "../styles/Search.styles";

/* ========================================
   RADAR POINT POSITIONS

   실제 위치 정보가 아니라
   주변 리스너 수를 시각적으로 표현하기 위한 위치
======================================== */

const radarPoints = [
  { cx: 87.5, cy: 31.5, r: 2.5 },
  { cx: 70.5, cy: 84.5, r: 3.5 },
  { cx: 141.5, cy: 191.5, r: 2.5 },
  { cx: 226.5, cy: 129.5, r: 2.5 },
  { cx: 163.5, cy: 22.5, r: 2.5 },

  { cx: 204.5, cy: 175.5, r: 2.5 },
  { cx: 186.5, cy: 72.5, r: 2.5 },
  { cx: 138.5, cy: 96.5, r: 2.5 },
  { cx: 5.5, cy: 136.5, r: 1.5 },
  { cx: 74.5, cy: 206.5, r: 3.5 },

  { cx: 161, cy: 150, r: 2 },
  { cx: 63.5, cy: 161.5, r: 1.5 },

  /* 추가 리스너 */
  { cx: 103, cy: 51, r: 2 },
  { cx: 215, cy: 105, r: 2.5 },
  { cx: 42, cy: 116, r: 2 },
  { cx: 177, cy: 201, r: 2 },
  { cx: 93, cy: 180, r: 2.5 },
  { cx: 196, cy: 143, r: 1.5 },
  { cx: 48, cy: 54, r: 2 },
  { cx: 153, cy: 63, r: 2.5 },
];

const Search = () => {
  const navigate = useNavigate();

  const [isPaused, setIsPaused] = useState(false);

  /* ========================================
     TODO
     나중에 백엔드 데이터로 변경
  ======================================== */

  const matchingData = {
    radius: 1,
    listenerCount: 12,
    similarity: 70,
  };

  /*
    화면에 표시할 점 개수

    listenerCount가 12 → 12개
    listenerCount가 5  → 5개
    listenerCount가 30 → 최대 20개
  */

  const visiblePointCount = Math.min(
    matchingData.listenerCount,
    radarPoints.length
  );

  const handleToggleSearch = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <SearchContainer>
      <SearchContent>
        {/* ========================================
            HEADER
        ======================================== */}

        <Header />

        {/* ========================================
            SEARCH TITLE
        ======================================== */}

        <SearchTop>
          <BackButton
            type="button"
            onClick={() => navigate(-1)}
            aria-label="뒤로가기"
          >
            ‹
          </BackButton>

          <SearchTitle>
            {isPaused ? "Paused" : "Searching..."}
          </SearchTitle>
        </SearchTop>

        {/* ========================================
            SEARCH INFO
        ======================================== */}

        <SearchInfo>
          <RadiusText>
            <strong>{matchingData.radius}km</strong>
            {" "}안에서
          </RadiusText>

          <MatchingDescription>
            {isPaused
              ? "탐색이 일시정지되었습니다."
              : "음악적으로 연결되는 사람을 찾고 있습니다."}
          </MatchingDescription>
        </SearchInfo>

        {/* ========================================
            RADAR
        ======================================== */}

        <RadarWrapper>
          <RadarSvg
            viewBox="0 0 240 240"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* RADAR RINGS */}

            <RadarRing
              cx="120"
              cy="120"
              r="119.75"
              $paused={isPaused}
              $delay="0.9s"
            />

            <RadarRing
              cx="120"
              cy="120"
              r="89.75"
              $paused={isPaused}
              $delay="0.6s"
            />

            <RadarRing
              cx="120"
              cy="120"
              r="59.75"
              $paused={isPaused}
              $delay="0.3s"
            />

            <RadarRing
              cx="120"
              cy="120"
              r="29.75"
              $paused={isPaused}
              $delay="0s"
            />

            {/* ========================================
                LISTENER POINTS

                listenerCount에 따라 자동으로
                표시되는 점 개수가 변경됨
            ======================================== */}

            {radarPoints
              .slice(0, visiblePointCount)
              .map((point, index) => (
                <RadarPoint
                  key={index}
                  cx={point.cx}
                  cy={point.cy}
                  r={point.r}
                  $paused={isPaused}
                  $delay={`${(index % 6) * 0.3}s`}
                />
              ))}

            {/* ========================================
                CENTER SIGNAL
            ======================================== */}

            <RadarCenterWave
              cx="120"
              cy="120"
              r="10"
              $paused={isPaused}
            />

            <RadarCenter
              cx="120"
              cy="120"
              r="10"
              $paused={isPaused}
            />
          </RadarSvg>
        </RadarWrapper>

        {/* ========================================
            MATCHING STATS
        ======================================== */}

        <MatchingStats>
          {/* 주변 리스너 */}

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

          {/* 탐색 반경 */}

          <StatItem>
            <StatIcon
              src={locationIcon}
              alt=""
            />

            <StatLabel>
              탐색 반경
            </StatLabel>

            <StatValue>
              {matchingData.radius}km
            </StatValue>
          </StatItem>

          <StatDivider />

          {/* 음악적 유사도 */}

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

        {/* ========================================
            SEARCH CONTROL
        ======================================== */}

        <SearchToggleButton
          type="button"
          $paused={isPaused}
          onClick={handleToggleSearch}
        >
          {isPaused ? (
            <>
              <PlayIcon>▶</PlayIcon>
              다시 탐색하기
            </>
          ) : (
            <>
              <PauseIcon>
                <span />
                <span />
              </PauseIcon>

              탐색 일시정지
            </>
          )}
        </SearchToggleButton>
      </SearchContent>

      {/* NAVBAR */}

      <NavBar />
    </SearchContainer>
  );
};

export default Search;