import { useEffect, useState } from "react";

import api from "../../api/axios";

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
  // ========================================
  // Spotify 현재 재생곡
  // ========================================
  const [currentTrack, setCurrentTrack] =
    useState(null);

  // ========================================
  // 1km 이내 주변 리스너 수
  // ========================================
  const [listenerCount, setListenerCount] =
    useState(0);

  // ========================================
  // 매칭 화면 데이터
  // ========================================
  const matchingData = {
    radius: 1,
    listenerCount,
    similarity: 70,
  };

  // ========================================
  // 현재 위치 저장
  // + 주변 리스너 조회
  // ========================================
  useEffect(() => {
    const updateLocationAndNearbyUsers = () => {
      if (!navigator.geolocation) {
        console.error(
          "현재 브라우저는 위치 정보를 지원하지 않습니다."
        );
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } =
              position.coords;

            console.log(
              "현재 위치:",
              latitude,
              longitude
            );

            // ------------------------------
            // 1. 현재 위치 백엔드에 저장
            // ------------------------------
            const locationResponse =
              await api.put(
                "/users/me/location",
                {
                  latitude,
                  longitude,
                }
              );

            console.log(
              "위치 저장 성공:",
              locationResponse.data
            );

            // ------------------------------
            // 2. 1km 이내 사용자 조회
            // ------------------------------
            const nearbyResponse =
              await api.get(
                "/users/me/location/nearby"
              );

            console.log(
              "주변 리스너:",
              nearbyResponse.data
            );

            // 배열 길이 = 주변 리스너 수
            setListenerCount(
              nearbyResponse.data.length
            );
          } catch (error) {
            console.error(
              "위치 또는 주변 리스너 조회 실패:",
              error.response?.data || error
            );
          }
        },

        (error) => {
          console.error(
            "위치 권한 또는 조회 실패:",
            error
          );
        },

        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    };

    updateLocationAndNearbyUsers();
  }, []);

  // ========================================
  // Spotify 현재 재생곡 조회
  // ========================================
  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await api.get(
          "/spotify/current-track"
        );

        console.log(
          "현재 재생곡:",
          response.data
        );

        if (response.data.track) {
          setCurrentTrack(
            response.data.track
          );
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error(
          "현재 재생곡 조회 실패:",
          error.response?.data || error
        );

        setCurrentTrack(null);
      }
    };

    fetchCurrentTrack();
  }, []);

  return (
    <AfterContainer>
      <AfterContent>
        {/* =========================
            HEADER
        ========================= */}
        <Header />

        {/* =========================
            현재 재생곡
        ========================= */}
        <NowPlayingCard>
          <AlbumCover>
            {currentTrack?.albumImage && (
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

            {currentTrack ? (
              <>
                <TrackTitle>
                  {currentTrack.title}
                </TrackTitle>

                <TrackArtist>
                  {currentTrack.artist}
                </TrackArtist>
              </>
            ) : (
              <>
                <TrackTitle>
                  재생 중인 곡이 없습니다
                </TrackTitle>

                <TrackArtist>
                  Spotify에서 음악을 재생해주세요.
                </TrackArtist>
              </>
            )}
          </TrackContent>
        </NowPlayingCard>

        {/* =========================
            MATCHING CARD
        ========================= */}
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
            <strong>
              {matchingData.radius}km
            </strong>{" "}
            안에서
          </RadiusText>

          <MatchingDescription>
            음악적으로 연결되는 사람을 찾고 있습니다.
          </MatchingDescription>

          {/* =========================
              매칭 정보
          ========================= */}
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
        </MatchingCard>
      </AfterContent>

      <NavBar />
    </AfterContainer>
  );
};

export default AfterHome;