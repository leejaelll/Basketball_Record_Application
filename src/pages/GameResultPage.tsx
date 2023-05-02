import { useSelector } from 'react-redux';
import PlayerResult from '../components/PlayerResult';
import TeamScore from '../components/TeamScore';

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

  // homeTeam의 총 점수 & awayTeam의 총 점수
  const TotalScoreOfHome = homeTeam
    .map((el) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  const TotalScoreOfAway = awayTeam
    .map((el) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <div className="flex justify-center items-center gap-20 mt-20 mb-10">
        <TeamScore teamName={teamArray[0]} teamScore={TotalScoreOfHome} />
        <div className="text-4xl">VS</div>
        <TeamScore teamName={teamArray[1]} teamScore={TotalScoreOfAway} />
      </div>
      <h2 className="mt-24 font-semibold text-2xl bg-slate-100 px-3 mb-3">
        선수별 기록📝
      </h2>
      <div className="flex ">
        <div className="w-1/2 flex flex-col text-center p-3">
          <h1 className="text-lg font-light">{teamArray[0]}</h1>
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
        <div className="w-1/2 flex flex-col text-center p-3">
          <h1 className="text-lg font-light">{teamArray[1]}</h1>
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
      </div>
    </>
  );
}
