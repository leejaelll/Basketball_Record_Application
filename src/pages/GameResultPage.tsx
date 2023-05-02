import { useSelector } from 'react-redux';
import PlayerResult from '../components/PlayerResult';

export default function GameResultPage() {
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

  console.log(homeTeam, awayTeam);

  // homeTeam의 총 점수 & awayTeam의 총 점수
  const TotalScoreOfHome = homeTeam
    .map((el) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  const TotalScoreOfAway = awayTeam
    .map((el) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <h1>게임 결과 페이지</h1>
      <div>
        {TotalScoreOfHome} vs {TotalScoreOfAway}
      </div>
      <div>
        <h1>{teamArray[0]}</h1>
        <table className=" border-separate border-spacing-2 border border-slate-400">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Rebound</th>
              <th>Assist</th>
              <th>Steal</th>
              <th>Foul</th>
            </tr>
          </thead>
          <tbody>
            {homeTeam.map((element) => (
              <PlayerResult key={element.id} player={element} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1>{teamArray[1]}</h1>
        <table className=" border-separate border-spacing-2 border border-slate-400">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Rebound</th>
              <th>Assist</th>
              <th>Steal</th>
              <th>Foul</th>
            </tr>
          </thead>
          <tbody>
            {awayTeam.map((element) => (
              <PlayerResult key={element.id} player={element} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
