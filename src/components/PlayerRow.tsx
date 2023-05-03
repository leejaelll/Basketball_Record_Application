import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

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
    <tr className="text-lg">
      <td className="text-center">{name}</td>
      <td className="text-center text-3xl">
        <button
          type="button"
          onClick={() => {
            dispatch(decreaseScore(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        <span className="mx-1">{score}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increaseScore(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </td>
      <td className="text-center text-3xl">
        <button
          type="button"
          onClick={() => {
            dispatch(decreaseRebound(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        <span className="mx-1">{rebound}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increaseRebound(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </td>
      <td className="text-center text-3xl">
        <button
          type="button"
          onClick={() => {
            dispatch(decreaseAssist(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        <span className="mx-1">{assist}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increaseAssist(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </td>
      <td className="text-center text-3xl">
        <button
          type="button"
          onClick={() => {
            dispatch(decreaseSteal(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        <span className="mx-1">{steal}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increaseSteal(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </td>
      <td className="text-center text-3xl">
        <button
          type="button"
          onClick={() => {
            dispatch(decreaseFoul(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        <span className="mx-1">{foul}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increaseFoul(player.id));
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </td>
    </tr>
  );
}
