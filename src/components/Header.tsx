import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { initTodayPlayers } from '../modules/player';

import logo from '../assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center mb-8">
      <Link to="/">
        <img
          src={logo}
          className="w-20 rounded-xl mr-4"
          onClick={() => dispatch(initTodayPlayers())}
        />
      </Link>
      <h1 className="text-2xl font-bold">
        Move Signature Box_Score Application 🏀
      </h1>
    </header>
  );
}
