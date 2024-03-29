import styled from 'styled-components';

interface Props {
  handleClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  display: flex;
  background-color: var(--color-blue-500);
  color: var(--color-grey-100);
  border: 0;
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  border-radius: var(--border-radius-md);
  margin-top: 2rem;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease-out;
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Button = ({ handleClick, children }: Props) => {
  return (
    <StyledButton onClick={() => handleClick?.()}>{children}</StyledButton>
  );
};

export default Button;
