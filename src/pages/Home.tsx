import {useMemo} from 'react';
import styled from 'styled-components';
import {Card, SmallCard} from '../components/Cards';
import {projects} from '../projects';
import Page from '../templates/Page';

const H1 = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
`;

const Main = styled.div`
  display: flex;
  margin-top: 100px;

  .skills {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    .tag {
      padding: 8px 10px;
      background-color: #4d6af6;
      border-radius: 7px;
      margin-right: 7px;
      margin-bottom: 7px;
    }
  }

  .col {
    width: 100%;
    :first-child {
      margin-right: 70px;
    }
    :last-child {
      width: 70%;
    }
  }

  @media screen and (max-width: 650px) {
    .col {
      :first-child {
        margin-right: 30px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    .col {
      :first-child {
        margin-right: 0;
      }
      :last-child {
        width: 100%;
      }
    }
  }
`;

export default function Home() {
  const skills = [
    'React',
    'Typescript',
    'Jest',
    'GraphQl',
    'Gatsby',
    'jQuery',
    'Vim',
    'Blender',
    'Figma',
    'Three.js',
    'Html',
    'Css',
    'Bash',
    'Git',
    'Php',
  ];

  const currentProjects = useMemo(
    () =>
      projects
        .filter((project) => project.category === 'current')
        .map((project, index) => (
          <Card {...project} key={index} link={`/projects/${project.path}`} />
        )),
    []
  );

  const otherProjects = useMemo(
    () =>
      projects
        .filter((project) => project.category === 'other')
        .map((project, index) => (
          <SmallCard
            {...project}
            key={index}
            link={`/projects/${project.path}`}
          />
        )),
    []
  );

  return (
    <Page>
      <H1>
        Hey👋 <br />
        I&apos;m Trevor.
      </H1>
      <p>
        I&apos;m a <b>Software Developer</b>
      </p>
      <Main>
        <div className="col">
          <h2>Current Projects</h2>
          {currentProjects}
        </div>
        <div className="col">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((skill, key) => (
              <div key={key} className="tag">
                {skill}
              </div>
            ))}
          </div>
          <h2>Other Projects</h2>
          {otherProjects}
        </div>
      </Main>
    </Page>
  );
}
