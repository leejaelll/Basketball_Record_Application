import { Link } from 'react-router-dom';
import SelectPlayers from '../components/SelectPlayers';

export default function SelectPlayerPage() {
  return (
    <>
      <div className="flex">
        <SelectPlayers teamName={'이륙후수신불가'} />
        <div className=" border-r border-solid border-slate-300"></div>
        <SelectPlayers teamName={'타요'} />
      </div>

      <Link to="/boxscore" className="block w-fit ml-auto mr-4">
        <button
          type="button"
          className="text-4xl btn-45 after:content-[''] after:absolute after:bg-black after:rounded-lg after:h-12 after:left-0 after:w-full after:translate-x-2 after:translate-y-2 after:transform after:transition-transform after:ease-out after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0 active:bg-red-400 hover:outline-none "
        >
          Next
        </button>
      </Link>
    </>
  );
}
