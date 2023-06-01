import styled from 'styled-components';

import '../styles/button.css';

import { Link } from 'react-router-dom';

import SelectPlayers from '../components/SelectPlayers';

export default function SelectPlayerPage() {
  return (
    <>
      <SelectPlayerPageLayout>
        <SelectPlayers teamName={'이륙후수신불가'} />
        <Divider />
        <SelectPlayers teamName={'타요'} />
      </SelectPlayerPageLayout>

      <StyledLink to="/boxscore">
        <Button className="button-56" type="button">
          Next👉🏻
        </Button>
      </StyledLink>
    </>
  );
}

const SelectPlayerPageLayout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  border-right: 1px solid rgb(203, 213, 225);
`;

const StyledLink = styled(Link)`
  display: block;
  width: fit-content;
  margin-right: 1rem;
  margin-left: auto;
`;

const Button = styled.button`
  font-size: 25px;
  font-weight: 700;
`;
