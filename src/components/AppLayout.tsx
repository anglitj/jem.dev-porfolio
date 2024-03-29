import { Outlet } from 'react-router-dom';
import { Header } from '.';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  height: 90vh;
  min-height: 30vh;
  justify-content: center;
  align-items: center;
`;

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <footer></footer>
    </div>
  );
};

export default AppLayout;
