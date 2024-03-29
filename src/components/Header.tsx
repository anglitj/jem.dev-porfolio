import styled from 'styled-components';
import { Logo, MainNav } from '.';

const StyledHeader = styled.div`
  display: flex;
  height: 7rem;
  padding: 0 5rem;
  width: 100%;
  align-items: center;
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(2px);
`;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <MainNav />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
