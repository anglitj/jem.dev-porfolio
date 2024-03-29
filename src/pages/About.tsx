import styled from 'styled-components';

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
    max-width: 50rem;
    font-size: 2rem;
    text-indent: 4rem;
    color: var(--color-grey-600);
  }
`;

const Img = styled.img`
  height: 40rem;
  border-radius: 20rem;
  box-shadow: var(--shadow-lg);
`;

const TechStacks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    width: 8rem;
    height: 8rem;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      translate: 0.3rem -0.5rem;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s ease-in-out;
    }
  }

  & img {
    height: 100%;
    width: 100%;
  }
`;

const About = () => {
  return (
    <Container>
      <Header>
        <h1>About Me</h1>
        <Separator />
      </Header>
      <Contents>
        <div>
          <p>
            Hey, my name is Jem, and I'm a software engineer mainly on Desktop
            Applications for more than 7years and just recently learned Web
            applications in 2023. My main stack in Web Applications are React,
            Express JS, MSSQL Server. As for Desktop Applications are C#/VB.NET,
            MSSQL Server / MySQL.
          </p>
          <p>
            I will be recreating most my desktop application will have a web
            application version, so stay tuned. 😉
          </p>
        </div>

        <Img src="/jem.jpg" alt="jem" />
      </Contents>
      <TechStacks>
        <li>
          <img src="/tech-stack/csharp.svg" alt="csharp" />
        </li>
        <li>
          <img src="/tech-stack/vbnet.svg" alt="vbnet" />
        </li>
        <li>
          <img src="/tech-stack/react.svg" alt="react" />
        </li>
        <li>
          <img src="/tech-stack/javascript.svg" alt="javascript" />
        </li>
        <li>
          <img src="/tech-stack/typescript.svg" alt="typescript" />
        </li>
        <li>
          <img src="/tech-stack/nodejs.svg" alt="nodejs" />
        </li>
        <li>
          <img src="/tech-stack/mssql.svg" alt="mssql" />
        </li>
        <li>
          <img src="/tech-stack/mysql.svg" alt="mysql" />
        </li>
        <li>
          <img src="/tech-stack/java.svg" alt="java" />
        </li>
        <li>
          <img src="/tech-stack/c++.svg" alt="c++" />
        </li>
      </TechStacks>
    </Container>
  );
};

export default About;
