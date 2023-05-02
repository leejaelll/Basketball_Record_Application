import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BoxScore from '../components/BoxScore';
import FoulCircle from '../components/FoulCircle';

export default function BoxScorePage() {
  const state = useSelector((state) => state);
  const { todayPlayers } = state;

  const teamArray = [
    ...new Set(todayPlayers.map((element) => element.teamName)),
  ];

  const homeTeam = todayPlayers.filter(
    (player) => player.teamName === teamArray[0],
  );
  const awayTeam = todayPlayers.filter(
    (player) => player.teamName === teamArray[1],
  );

  // homeTeam의 총 점수 & awayTeam의 총 점수
  const TotalScoreOfHome = homeTeam
    .map((el) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  const TotalScoreOfAway = awayTeam
    .map((el) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  // 각 팀 파울 갯수 -> useState
  const [homeFoul, setHomeFoul] = useState(0);
  const [awayFoul, setAwayFoul] = useState(0);

  const handleClickSaveGame = () => {
    if (!localStorage.getItem('gameResult')) {
      const gameResultObj = [
        { gameId: Date.now(), playerResult: [...todayPlayers] },
      ];
      localStorage.setItem('gameResult', JSON.stringify(gameResultObj));
    } else {
      const prevResult = JSON.parse(localStorage.getItem('gameResult'));
      const updateResult = [
        ...prevResult,
        { gameId: Date.now(), playerResult: [...todayPlayers] },
      ];
      localStorage.setItem('gameResult', JSON.stringify(updateResult));
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h1>{teamArray[0]}</h1>
            <span>{TotalScoreOfHome}</span>
            <FoulCircle foulCount={homeFoul} setFoul={setHomeFoul} />
          </div>
          <span>VS</span>
          <div>
            <h1>{teamArray[1]}</h1>
            <span>{TotalScoreOfAway}</span>
            <FoulCircle foulCount={awayFoul} setFoul={setAwayFoul} />
          </div>
        </div>
        <BoxScore team={homeTeam} />
        <BoxScore team={awayTeam} />
      </div>
      <Link to="/result">
        <button type="button" onClick={handleClickSaveGame}>
          게임 종료
        </button>
      </Link>
    </div>
  );
}
