import { useDispatch, useSelector } from 'react-redux';
import { addToTodayPlayers } from '../modules/player';

import TeamNameField from './TeamNameField';

export default function SelectPlayers({ teamName }) {
  const state = useSelector((state) => state);
  const { players, todayPlayers } = state;
  const dispatch = useDispatch();

  const handleClickAddPlayer = (newPlayer) => {
    // todayPlayers 배열에 player 정보가 있는지 확인하고 있으면 무시, 없으면 dispatch
    !todayPlayers.some((player) => player.id === newPlayer.id) &&
      dispatch(addToTodayPlayers(newPlayer, teamName));
  };

  return (
    <div className="flex flex-col grow ">
      <TeamNameField teamName={teamName} />
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <button type="button" onClick={() => handleClickAddPlayer(player)}>
              {player.name}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2 className="mt-24 font-medium text-lg">선수확인</h2>
        <ul>
          {todayPlayers
            .filter((player) => player.teamName === teamName)
            .map((element) => (
              <li key={element.id}>{element.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
