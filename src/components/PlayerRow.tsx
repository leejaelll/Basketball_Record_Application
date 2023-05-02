import { useDispatch } from 'react-redux';

import {
  increaseScore,
  decreaseScore,
  increaseRebound,
  decreaseRebound,
  increaseAssist,
  decreaseAssist,
  increaseSteal,
  decreaseSteal,
  increaseFoul,
  decreaseFoul,
} from '../modules/player';

export default function PlayerRow({ player }) {
  const dispatch = useDispatch();

  const { name, score, rebound, assist, steal, foul } = player;

  return (
    <tr>
      <td>{name}</td>
      <td className="flex">
        {score}
        <span className="ml-3">
          <button
            type="button"
            className="text-xl"
            onClick={() => {
              dispatch(increaseScore(player.id));
            }}
          >
            +
          </button>
          <button
            type="button"
            className="text-2xl ml-2"
            onClick={() => {
              dispatch(decreaseScore(player.id));
            }}
          >
            -
          </button>
        </span>
      </td>
      <td>
        {rebound}
        <span className="ml-3">
          <button
            type="button"
            className="text-xl"
            onClick={() => {
              dispatch(increaseRebound(player.id));
            }}
          >
            +
          </button>
          <button
            type="button"
            className="text-2xl ml-2"
            onClick={() => {
              dispatch(decreaseRebound(player.id));
            }}
          >
            -
          </button>
        </span>
      </td>
      <td>
        {assist}
        <span className="ml-3">
          <button
            type="button"
            className="text-xl"
            onClick={() => {
              dispatch(increaseAssist(player.id));
            }}
          >
            +
          </button>
          <button
            type="button"
            className="text-2xl ml-2"
            onClick={() => {
              dispatch(decreaseAssist(player.id));
            }}
          >
            -
          </button>
        </span>
      </td>
      <td>
        {steal}
        <span className="ml-3">
          <button
            type="button"
            className="text-xl"
            onClick={() => {
              dispatch(increaseSteal(player.id));
            }}
          >
            +
          </button>
          <button
            type="button"
            className="text-2xl ml-2"
            onClick={() => {
              dispatch(decreaseSteal(player.id));
            }}
          >
            -
          </button>
        </span>
      </td>
      <td>
        {foul}
        <span className="ml-3">
          <button
            type="button"
            className="text-xl"
            onClick={() => {
              dispatch(increaseFoul(player.id));
            }}
          >
            +
          </button>
          <button
            type="button"
            className="text-2xl ml-2"
            onClick={() => {
              dispatch(decreaseFoul(player.id));
            }}
          >
            -
          </button>
        </span>
      </td>
    </tr>
  );
}
