import { useSelector } from 'react-redux';

const state = useSelector((state) => state);
const { todayPlayers } = state;

const teamArray = [...new Set(todayPlayers.map((element) => element.teamName))];

const homeTeam = todayPlayers.filter(
  (player) => player.teamName === teamArray[0],
);
const awayTeam = todayPlayers.filter(
  (player) => player.teamName === teamArray[1],
);

const TotalScoreOfHome = homeTeam
  .map((el) => el.score)
  .reduce((acc, cur) => acc + cur, 0);

const TotalScoreOfAway = awayTeam
  .map((el) => el.score)
  .reduce((acc, cur) => acc + cur, 0);

export { teamArray, homeTeam, awayTeam, TotalScoreOfAway, TotalScoreOfHome };
