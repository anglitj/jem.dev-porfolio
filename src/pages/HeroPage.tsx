import styled from 'styled-components';
import { Button } from '../components';
import { MdOutlineFileDownload } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Description = styled.div`
  width: 40rem;
`;
const HeroImg = styled.img`
  width: 45rem;
  height: 30rem;
  margin-top: 2rem;
  /* height: 40rem;
  width: 40rem; */
  /* border: var(--color-blue-800) solid 2px; */
`;

const Name = styled.span`
  color: var(--color-blue-500);
  font-size: 5rem;
  font-weight: 700;
`;

const H3 = styled.h3`
  color: var(--color-grey-600);
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 700;
`;

const P = styled.p`
  color: var(--color-grey-500);
  font-weight: 500;
  line-height: 2.1rem;
  margin-top: 2rem;
`;

const HeroPage = () => {
  return (
    <>
      <Container>
        <Description>
          <h2>Hi, my name is</h2>
          <Name>Jem Mar Anglit</Name>
          <H3>I build web & desktop applications.</H3>
          <P>
            I'm a full stack developer from Sto. Tomas, Batangas, Philippines. I
            enjoy working on every aspect of app development, from the user
            interface to the server logic.
          </P>
          <Button>
            <span>
              <MdOutlineFileDownload />
            </span>
            <a href="/CV_JemMarAnglit.pdf" download={'CV_JemMarAnglit.pdf'}>
              Resume
            </a>
          </Button>
        </Description>
        <HeroImg src="/hero.gif" alt="hero" />
      </Container>
    </>
  );
};

export default HeroPage;
