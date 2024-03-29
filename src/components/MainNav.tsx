import {
  HiHome,
  HiInboxArrowDown,
  HiMiniInformationCircle,
  HiSquaresPlus,
} from 'react-icons/hi2';
import styled from 'styled-components';
import { StyledNavLink } from '.';

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

const MainNav = () => {
  return (
    <NavList>
      <li>
        <StyledNavLink to="home">
          <HiHome />
          <span>Home</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="about">
          <HiMiniInformationCircle />
          <span>About</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="projects">
          <HiSquaresPlus />
          <span>Projects</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="contact">
          <HiInboxArrowDown />
          <span>Contact</span>
        </StyledNavLink>
      </li>
    </NavList>
  );
};

export default MainNav;
