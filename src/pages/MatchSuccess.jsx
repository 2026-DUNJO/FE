import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "../components/Header";

import beforeRadius from "../assets/home/before_radius.svg";
import connectIcon from "../assets/home/connect.svg";

import {
  MatchSuccessContainer,
  MatchSuccessContent,

  SuccessSection,
  SuccessTitle,
  SuccessTitleAccent,
  SuccessRadius,
  SuccessDescription,

  SongsSection,
  SongCard,
  AlbumCover,
  SongTitle,
  SongArtist,
  ConnectIcon,

  MatchCard,
  MatchLabel,
  MatchPercent,
  MatchProgress,
  MatchProgressFill,

  MusicDNASection,
  MusicDNAHeader,
  MusicDNATitle,
  AIBadge,
  MusicDNATags,
  MusicDNATag,
  MatchReasonBox,
  MatchReasonText,

  BottomButtonArea,
  SkipButton,
  InviteButton,
} from "../styles/MatchSuccess.styles";

const MatchSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* ========================================
     Search.jsx에서 전달받은 실제 매칭 데이터
  ======================================== */

  const match = location.state?.match;

  /* ========================================
     잘못된 접근 방지

     /match-success 주소로 직접 들어왔거나
     매칭 데이터가 없는 경우
  ======================================== */

  if (!match) {
    return (
      <MatchSuccessContainer>
        <MatchSuccessContent>
          <Header />

          <SuccessSection>
            <SuccessTitle>
              Match
              <br />

              <SuccessTitleAccent>
                Not Found
              </SuccessTitleAccent>
            </SuccessTitle>

            <SuccessDescription>
              매칭 정보를 찾을 수 없습니다.
            </SuccessDescription>
          </SuccessSection>

          <BottomButtonArea>
            <InviteButton
              type="button"
              onClick={() =>
                navigate("/search")
              }
            >
              다시 탐색하기
            </InviteButton>
          </BottomButtonArea>
        </MatchSuccessContent>
      </MatchSuccessContainer>
    );
  }

  /* ========================================
     대표 연결곡

     백엔드에서 가장 강한 곡 연결 하나를
     representativeConnection으로 전달
  ======================================== */

  const representativeConnection =
    match.representativeConnection;

  /* ========================================
     화면에서 사용할 데이터 정리
  ======================================== */

  const matchData = {
    matchedUserId: match.user.id,

    matchedUserNickname:
      match.user.nickname,

    mySong: {
      title:
        representativeConnection
          ?.myTrack?.title ||
        "알 수 없는 곡",

      artist:
        representativeConnection
          ?.myTrack?.artist ||
        "알 수 없는 아티스트",

      spotifyTrackId:
        representativeConnection
          ?.myTrack
          ?.spotifyTrackId,

      albumImage:
        representativeConnection
          ?.myTrack?.albumImage || "",

        spotifyUrl:
          representativeConnection.myTrack?.spotifyUrl || "",
    },

    matchedSong: {
      title:
        representativeConnection
          ?.otherTrack?.title ||
        "알 수 없는 곡",

      artist:
        representativeConnection
          ?.otherTrack?.artist ||
        "알 수 없는 아티스트",

      spotifyTrackId:
        representativeConnection
          ?.otherTrack
          ?.spotifyTrackId,

      albumImage:
        representativeConnection
          ?.otherTrack?.albumImage || "",

      spotifyUrl:
        representativeConnection?.otherTrack?.spotifyUrl || "",
    },

    similarity:
      match.similarity ?? 0,

    musicDNA:
      match.ai?.musicDNA ?? [],

    matchReason:
      match.ai?.matchReason ||
      "음악적 접점을 발견했습니다.",
  };

  /* ========================================
     지나가기

     다시 Search로 이동해서
     새로운 매칭 검색
  ======================================== */

  const handleSkip = () => {
    navigate("/search", {
      replace: true,
    });
  };

  /* ========================================
     친구 초대장

     다음 단계에서 실제 Invitation API 연결
  ======================================== */

  const handleInvite = () => {
    console.log(
      "친구 초대장 보내기"
    );

    console.log(
      "matchedUserId:",
      matchData.matchedUserId
    );

    console.log(
      "추천곡:",
      matchData.mySong
    );

    /*
      다음 단계:

      POST /api/invitations

      {
        receiverId,
        spotifyTrackId,
        trackTitle,
        trackArtist,
        albumImage,
        spotifyUrl
      }
    */
  };

  return (
    <MatchSuccessContainer>
      <MatchSuccessContent>
        <Header />

        {/* ========================================
            MATCH SUCCESS
        ======================================== */}

        <SuccessSection>
          <SuccessTitle>
            Match
            <br />

            <SuccessTitleAccent>
              Success!

              <SuccessRadius
                src={beforeRadius}
                alt=""
              />
            </SuccessTitleAccent>
          </SuccessTitle>

          <SuccessDescription>
            당신과 음악적으로 가까운
            <br />
            사람을 발견했습니다.
          </SuccessDescription>
        </SuccessSection>

        {/* ========================================
            REPRESENTATIVE SONG CONNECTION
        ======================================== */}

        <SongsSection>
          {/* 내 곡 */}

          <SongCard>
            <AlbumCover>
              {matchData.mySong
                .albumImage && (
                <img
                  src={
                    matchData.mySong
                      .albumImage
                  }
                  alt={
                    matchData.mySong
                      .title
                  }
                />
              )}
            </AlbumCover>

            <SongTitle>
              {matchData.mySong.title}
            </SongTitle>

            <SongArtist>
              {matchData.mySong.artist}
            </SongArtist>
          </SongCard>

          <ConnectIcon
            src={connectIcon}
            alt=""
          />

          {/* 상대방 곡 */}

          <SongCard $matched>
            <AlbumCover>
              {matchData.matchedSong
                .albumImage && (
                <img
                  src={
                    matchData
                      .matchedSong
                      .albumImage
                  }
                  alt={
                    matchData
                      .matchedSong.title
                  }
                />
              )}
            </AlbumCover>

            <SongTitle>
              {
                matchData.matchedSong
                  .title
              }
            </SongTitle>

            <SongArtist>
              {
                matchData.matchedSong
                  .artist
              }
            </SongArtist>
          </SongCard>
        </SongsSection>

        {/* ========================================
            MUSIC MATCH
        ======================================== */}

        <MatchCard>
          <MatchLabel>
            Music Match
          </MatchLabel>

          <MatchPercent>
            {matchData.similarity}%
          </MatchPercent>

          <MatchProgress>
            <MatchProgressFill
              $percent={
                matchData.similarity
              }
            />
          </MatchProgress>
        </MatchCard>

        {/* ========================================
            AI ANALYSIS
        ======================================== */}

        <MusicDNASection>
          <MusicDNAHeader>
            <MusicDNATitle>
              DUNJO's Pick!
            </MusicDNATitle>

            <AIBadge>
              AI ANALYZED
            </AIBadge>
          </MusicDNAHeader>

          <MusicDNATags>
            {matchData.musicDNA.map(
              (dna) => (
                <MusicDNATag
                  key={dna}
                >
                  {dna}
                </MusicDNATag>
              )
            )}
          </MusicDNATags>

          <MatchReasonBox>
            <MatchReasonText>
              {matchData.matchReason}
            </MatchReasonText>
          </MatchReasonBox>
        </MusicDNASection>

        {/* ========================================
            BUTTON
        ======================================== */}

        <BottomButtonArea>
          <SkipButton
            type="button"
            onClick={handleSkip}
          >
            지나가기
          </SkipButton>

          <InviteButton
            type="button"
            onClick={handleInvite}
          >
            친구 초대장 보내기
          </InviteButton>
        </BottomButtonArea>
      </MatchSuccessContent>
    </MatchSuccessContainer>
  );
};

export default MatchSuccess;