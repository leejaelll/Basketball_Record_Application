import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import TeamScore from '../components/TeamScore';
import BoxScore from '../components/BoxScore';
import FoulCircle from '../components/FoulCircle';

// import {
//   teamArray,
//   homeTeam,
//   awayTeam,
//   TotalScoreOfAway,
//   TotalScoreOfHome,
// } from '../utils/calculateScore';

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
        <div className="flex justify-center items-center gap-20 mt-20 mb-10">
          {/* 팀+ 점수 */}
          <div className="flex flex-col items-center gap-8">
            <TeamScore teamName={teamArray[0]} teamScore={TotalScoreOfHome} />
            <FoulCircle foulCount={homeFoul} setFoul={setHomeFoul} />
          </div>
          <div className="text-4xl">VS</div>
          {/* 팀 + 점수 */}
          <div className="flex flex-col items-center gap-8">
            <TeamScore teamName={teamArray[1]} teamScore={TotalScoreOfAway} />
            <FoulCircle foulCount={awayFoul} setFoul={setAwayFoul} />
          </div>
        </div>
        <div className="flex justify-evenly mb-20">
          <BoxScore team={homeTeam} />
          <BoxScore team={awayTeam} />
        </div>
      </div>
      <Link
        to="/Basketball_Record_Application/result"
        className="block w-fit ml-auto mr-4"
      >
        <button
          type="button"
          onClick={handleClickSaveGame}
          className="text-4xl btn-45 after:content-[''] after:absolute after:bg-black after:rounded-lg after:h-12 after:left-0 after:w-full after:translate-x-2 after:translate-y-2 after:transform after:transition-transform after:ease-out after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0 active:bg-red-400 hover:outline-none "
        >
          Game Over
        </button>
      </Link>
    </div>
  );
}
