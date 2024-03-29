import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyleNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.2rem 0.8rem;
  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-500);
  }

  &.active:visited {
    color: var(--color-blue-700);
  }

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

interface Props {
  children: React.ReactNode;
  to: string;
}

const StyledNavLink = ({ children, to }: Props) => {
  return <StyleNavLink to={to}>{children}</StyleNavLink>;
};

export default StyledNavLink;
