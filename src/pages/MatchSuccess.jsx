import { useNavigate } from "react-router-dom";

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

  BottomButtonArea,
  SkipButton,
  InviteButton,
} from "../styles/MatchSuccess.styles";

const MatchSuccess = () => {
  const navigate = useNavigate();

  // TODO: 나중에 Spotify / 백엔드 데이터로 변경
  const matchData = {
    matchId: 123,
    matchedUserId: 27,

    mySong: {
      title: "like JENNIE",
      artist: "제니 (JENNIE)",
      albumImage: "",
    },

    matchedSong: {
      title: "락 (樂)",
      artist: "Stray Kids",
      albumImage: "",
    },

    similarity: 73,
  };

  /* ========================================
     지나가기

     현재 매칭을 넘기고
     다시 탐색 화면으로 이동

     TODO:
     나중에는 여기서 skip API 호출 후 이동
  ======================================== */
  const handleSkip = () => {
    navigate("/search");
  };

  /* ========================================
     친구 초대장 보내기

     현재는 프론트 UI 테스트만 진행

     TODO:
     나중에 백엔드 연결 시
     1. 초대장 전송 API
     2. chatRoomId 응답
     3. 해당 채팅방으로 이동
  ======================================== */
  const handleInvite = () => {
    console.log("친구 초대장 보내기");
    console.log("matchId:", matchData.matchId);
    console.log("matchedUserId:", matchData.matchedUserId);

    // 나중에는 아래 형태로 변경
    //
    // const response = await sendMatchInvite(matchData.matchId);
    // navigate(`/chat/${response.chatRoomId}`);
  };

  return (
    <MatchSuccessContainer>
      <MatchSuccessContent>
        {/* HEADER */}
        <Header />

        {/* MATCH SUCCESS */}
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

        {/* SONG MATCH */}
        <SongsSection>
          {/* 내 노래 */}
          <SongCard>
            <AlbumCover>
              {matchData.mySong.albumImage && (
                <img
                  src={matchData.mySong.albumImage}
                  alt={matchData.mySong.title}
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

          {/* 연결 아이콘 */}
          <ConnectIcon
            src={connectIcon}
            alt=""
          />

          {/* 상대 노래 */}
          <SongCard $matched>
            <AlbumCover>
              {matchData.matchedSong.albumImage && (
                <img
                  src={matchData.matchedSong.albumImage}
                  alt={matchData.matchedSong.title}
                />
              )}
            </AlbumCover>

            <SongTitle>
              {matchData.matchedSong.title}
            </SongTitle>

            <SongArtist>
              {matchData.matchedSong.artist}
            </SongArtist>
          </SongCard>
        </SongsSection>

        {/* MUSIC MATCH */}
        <MatchCard>
          <MatchLabel>
            Music Match
          </MatchLabel>

          <MatchPercent>
            {matchData.similarity}%
          </MatchPercent>

          <MatchProgress>
            <MatchProgressFill
              $percent={matchData.similarity}
            />
          </MatchProgress>
        </MatchCard>

        {/* BUTTON */}
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