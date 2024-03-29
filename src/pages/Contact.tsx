import styled from 'styled-components';
import { Button } from '../components';
import {
  IoChatbubbleEllipsesOutline,
  IoMailUnreadOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Separator = styled.div`
  height: 1px;
  width: 45rem;
  background-color: var(--color-grey-300);
  margin-bottom: 2rem;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & p {
    font-size: 2rem;
    color: var(--color-grey-500);
    max-width: 60rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Contact = () => {
  return (
    <Container>
      <Header>
        <h1>Contact Me</h1>
        <Separator />
      </Header>
      <Contents>
        <p>
          I'm currently looking for opportunities. Whether its a Full-Time Job
          or a Freelance work. Send me a message, I'll try to get back to you as
          soon as possible.
        </p>
      </Contents>
      <Buttons>
        <Button>
          <span>
            <IoMailUnreadOutline />
          </span>
          <Link to="mailto:jemanglit@gmail.com" target="_blank">
            Email Me
          </Link>
        </Button>
        <Button>
          <span>
            <IoChatbubbleEllipsesOutline />
          </span>
          <Link to="https://wa.link/wal01p" target="_blank">
            Let's Chat
          </Link>
        </Button>
      </Buttons>
    </Container>
  );
};

export default Contact;
