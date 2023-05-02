import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { initTodayPlayers } from '../modules/player';

import logo from '../assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header>
      <div>
        {/* TODO: Home버튼을 눌렀을 때 todayPlayers가 초기화되어야 함 */}
        <Link to="/">
          <img
            src={logo}
            className="w-20"
            onClick={() => dispatch(initTodayPlayers())}
          />
        </Link>
      </div>
    </header>
  );
}
