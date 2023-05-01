import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Link to="/setting">
        {/* TODO: 'Start New Game 버튼을 누르면 todayPlayers가 빈배열이 되도록 만들어야 함' */}
        <button type="button" className="bg-lime-300">
          Start New Game
        </button>
      </Link>
    </>
  );
}
