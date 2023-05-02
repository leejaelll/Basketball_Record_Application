import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className=" flex items-center justify-center h-5/6	">
      <Link to="/Basketball_Record_Application/setting">
        <button
          type="button"
          className="text-4xl btn-45 after:content-[''] after:absolute after:bg-black after:rounded-lg after:h-12 after:left-0 after:w-full after:translate-x-2 after:translate-y-2 after:transform after:transition-transform after:ease-out after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0 active:bg-red-400 hover:outline-none "
        >
          Start New Game
        </button>
      </Link>
    </div>
  );
}
