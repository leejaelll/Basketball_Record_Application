import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} className="w-20" />
        </Link>
      </div>
    </header>
  );
}
