import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../styles/button.css';

export default function HomePage() {
  return (
    <HomePageLayout>
      <Link to="/setting">
        <Button className="button-56 ">Start New Game</Button>
      </Link>
    </HomePageLayout>
  );
}

const HomePageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const Button = styled.button`
  font-size: 36px;
  font-weight: 700;
`;
