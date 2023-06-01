import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addToTodayPlayers, removeTodayPlayers } from '../modules/player';

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
    <Container>
      <TeamNameField teamName={teamName} />
      <PlayerList>
        {players.map((player) => (
          <li
            key={player.id}
            className="bg-slate-300 inline-block rounded-3xl w-20 h-20 text-center  "
          >
            <button
              type="button"
              onClick={() => handleClickAddPlayer(player)}
              className="w-full h-full text-lg font-light"
            >
              {player.name}
            </button>
          </li>
        ))}
      </PlayerList>
      <div className="flex flex-col items-center">
        <h2 className="mt-24 font-semibold text-2xl bg-slate-100 px-3 mb-3">
          선수확인⛹🏻
        </h2>
        <ul>
          {todayPlayers
            .filter((player) => player.teamName === teamName)
            .map((element) => (
              <li key={element.id} className="list-disc text-xl mb-2 ">
                {element.name}
                <button
                  type="button"
                  onClick={() => dispatch(removeTodayPlayers(element))}
                  className="ml-5 text-2xl"
                >
                  ❎
                </button>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}

// background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
// bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 50%;
`;

const PlayerList = styled.ul`
  display: grid;
  justify-items: center;
  gap: 0.75rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 1.5rem;
`;
