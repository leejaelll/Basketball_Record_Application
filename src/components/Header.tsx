import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { initTodayPlayers } from '../modules/player';

import logo from '../assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <HeaderLayout>
      <Link to="/">
        <Img src={logo} onClick={() => dispatch(initTodayPlayers())} />
      </Link>
      <Title>Move_Record 🏀</Title>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
`;

const Img = styled.img`
  width: 5rem;
  margin-right: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
`;
