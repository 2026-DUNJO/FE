import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

import listenerIcon from "../assets/home/listener.svg";
import locationIcon from "../assets/home/location.svg";
import similarityIcon from "../assets/home/similarity.svg";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import {
  SearchContainer,
  SearchContent,

  SearchTop,
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
   주변 리스너 수를 시각적으로 표현
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

  const [isPaused, setIsPaused] = useState(() => {
  return localStorage.getItem("matchingPaused") === "true";
});
  const [listenerCount, setListenerCount] = useState(0);

  /* ========================================
     POLLING 관리
  ======================================== */

  const intervalRef = useRef(null);

  // 이전 매칭 요청이 끝나기 전에
  // 새로운 요청이 중복으로 들어가는 것 방지
  const isSearchingRef = useRef(false);

  const matchingData = {
    radius: 1,
    listenerCount,
    similarity: 70,
  };

  const visiblePointCount = Math.min(
    matchingData.listenerCount,
    radarPoints.length
  );

  /* ========================================
     주변 리스너 조회
  ======================================== */

  const fetchNearbyUsers = async () => {
    try {
      const response = await api.get(
        "/users/me/location/nearby"
      );

      console.log(
        "주변 리스너:",
        response.data
      );

      setListenerCount(
        response.data.length
      );

      return response.data;
    } catch (error) {
      console.error(
        "주변 리스너 조회 실패:",
        error.response?.data || error
      );

      return [];
    }
  };

  /* ========================================
     실제 매칭 검색
  ======================================== */

  const searchMatch = async () => {
    // 이미 매칭 요청 중이면
    // 새로운 요청을 보내지 않음
    if (isSearchingRef.current) {
      console.log(
        "이전 매칭 검색이 아직 진행 중입니다."
      );

      return;
    }

    isSearchingRef.current = true;

    try {
      console.log(
        "DUNJO 매칭 검색 시작"
      );

      const response = await api.post(
        "/matching/search"
      );

      console.log(
        "매칭 검색 결과:",
        response.data
      );

      /* ====================================
         매칭 성공
      ==================================== */

      if (
        response.data.matched &&
        response.data.matches?.length > 0
      ) {
        // similarity가 가장 높은 사용자
        const bestMatch =
          response.data.matches[0];

        console.log(
          "매칭 성공:",
          bestMatch
        );

        /* ================================
           Polling 종료
        ================================ */

        if (intervalRef.current) {
          clearInterval(
            intervalRef.current
          );

          intervalRef.current = null;
        }

        /* ================================
           매칭 성공 진동
        ================================ */

        if ("vibrate" in navigator) {
          navigator.vibrate([
            120,
            70,
            180,
          ]);
        }

        /* ================================
           MatchSuccess 이동
        ================================ */

        navigate(
          "/match-success",
          {
            state: {
              match: bestMatch,
            },
          }
        );

        return;
      }

      console.log(
        "70% 이상 매칭 없음"
      );
    } catch (error) {
      console.error(
        "매칭 검색 실패:",
        error.response?.data || error
      );
    } finally {
      isSearchingRef.current = false;
    }
  };

  /* ========================================
     한 번의 탐색 작업

     1. 주변 사용자 갱신
     2. 음악 매칭 검색
  ======================================== */

  const runSearch = async () => {
    await fetchNearbyUsers();
    await searchMatch();
  };

  /* ========================================
     30초 Polling 시작
  ======================================== */

  const startPolling = () => {
    // 혹시 기존 interval이 있으면 제거
    if (intervalRef.current) {
      clearInterval(
        intervalRef.current
      );
    }

    intervalRef.current =
      setInterval(() => {
        console.log(
          "30초 Polling - 매칭 재탐색"
        );

        runSearch();
      }, 30000);
  };

  /* ========================================
     Search 페이지 최초 진입

     즉시 검색 1회
     +
     이후 30초마다 검색
  ======================================== */

useEffect(() => {
  const initializeSearch = async () => {
    const paused =
      localStorage.getItem("matchingPaused") === "true";

    // 일시정지 상태라면 주변 리스너 수만 조회
    // 실제 매칭 검색은 하지 않음
    if (paused) {
      await fetchNearbyUsers();
      return;
    }

    // 탐색 ON 상태
    await runSearch();
    startPolling();
  };

  initializeSearch();

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
}, []);

  /* ========================================
     탐색 일시정지 / 다시 탐색
  ======================================== */

  const handleToggleSearch = async () => {
    /* ====================================
       현재 탐색 중
       → 일시정지
    ==================================== */

    if (!isPaused) {
      setIsPaused(true);
      localStorage.setItem("matchingPaused", "true");

      if (intervalRef.current) {
        clearInterval(
          intervalRef.current
        );

        intervalRef.current = null;
      }

      console.log(
        "매칭 탐색 일시정지"
      );

      return;
    }

    /* ====================================
       현재 일시정지 상태
       → 다시 탐색
    ==================================== */

    setIsPaused(false);
    localStorage.setItem("matchingPaused", "false");

    console.log(
      "매칭 탐색 다시 시작"
    );

    // 다시 시작하자마자 즉시 검색
    await runSearch();

    // 이후 다시 30초 Polling
    startPolling();
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
          <SearchTitle>
            {isPaused
              ? "Paused"
              : "Searching..."}
          </SearchTitle>
        </SearchTop>

        {/* ========================================
            SEARCH INFO
        ======================================== */}

        <SearchInfo>
          <RadiusText>
            <strong>
              {matchingData.radius}km
            </strong>{" "}
            안에서
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

            {/* LISTENER POINTS */}

            {radarPoints
              .slice(
                0,
                visiblePointCount
              )
              .map(
                (point, index) => (
                  <RadarPoint
                    key={index}
                    cx={point.cx}
                    cy={point.cy}
                    r={point.r}
                    $paused={isPaused}
                    $delay={`${
                      (index % 6) * 0.3
                    }s`}
                  />
                )
              )}

            {/* CENTER SIGNAL */}

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
              {
                matchingData.listenerCount
              }
              명
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
              {
                matchingData.similarity
              }
              % 이상
            </StatValue>
          </StatItem>
        </MatchingStats>

        {/* ========================================
            SEARCH CONTROL
        ======================================== */}

        <SearchToggleButton
          type="button"
          $paused={isPaused}
          onClick={
            handleToggleSearch
          }
        >
          {isPaused ? (
            <>
              <PlayIcon>
                ▶
              </PlayIcon>

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

      <NavBar />
    </SearchContainer>
  );
};

export default Search;