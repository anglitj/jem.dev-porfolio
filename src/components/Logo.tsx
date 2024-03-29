import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img`
  height: 24px;
  width: auto;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <StyledNavLink to="/home">
      <Img src="/logo.svg" alt="logo" />
    </StyledNavLink>
  );
};

export default Logo;
