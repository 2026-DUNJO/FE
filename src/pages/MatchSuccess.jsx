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

  // AI MUSIC DNA
  MusicDNASection,
  MusicDNAHeader,
  MusicDNATitle,
  AIBadge,
  MusicDNATags,
  MusicDNATag,
  MatchReasonBox,
  MatchReasonLabel,
  MatchReasonText,

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

    // TODO: 나중에 AI 분석 API 결과로 변경
    musicDNA: [
      "HIGH ENERGY",
      "CONFIDENT",
      "HIP-HOP",
    ],

    matchReason:
      "두 곡 모두 강한 에너지와 자신감 있는 분위기를 가지고 있어요.",
  };

  const handleSkip = () => {
    navigate("/search");
  };

  const handleInvite = () => {
    console.log("친구 초대장 보내기");
    console.log("matchId:", matchData.matchId);
    console.log("matchedUserId:", matchData.matchedUserId);

    // TODO:
    // const response = await sendMatchInvite(matchData.matchId);
    // navigate(`/chat/${response.chatRoomId}`);
  };

  return (
    <MatchSuccessContainer>
      <MatchSuccessContent>
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

          <ConnectIcon
            src={connectIcon}
            alt=""
          />

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

        {/* AI MUSIC DNA */}
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
            {matchData.musicDNA.map((dna) => (
              <MusicDNATag key={dna}>
                {dna}
              </MusicDNATag>
            ))}
          </MusicDNATags>

          <MatchReasonBox>
            <MatchReasonText>
              {matchData.matchReason}
            </MatchReasonText>
          </MatchReasonBox>
        </MusicDNASection>

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