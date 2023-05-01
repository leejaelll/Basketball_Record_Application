import { Link } from 'react-router-dom';
import SelectPlayers from '../components/SelectPlayers';

export default function SelectPlayerPage() {
  return (
    <>
      <div className="flex">
        <SelectPlayers teamName={'이륙후수신불가'} />
        <SelectPlayers teamName={'타요'} />
      </div>

      <Link to="/boxscore">
        <button type="button">Next</button>
      </Link>
    </>
  );
}
