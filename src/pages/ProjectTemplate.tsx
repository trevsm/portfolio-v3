import styled from 'styled-components';
import {Project} from '../types';
import Page from '../templates/Page';
import {Link} from 'react-router-dom';
import {ArrowLeft, ArrowRight} from 'react-bootstrap-icons';

const Main = styled.div`
  text-align: center;
  margin-top: 40px;
  .buttons {
    margin-top: 70px;
    margin-bottom: 10px;
  }
  h2 {
    max-width: 800px;
    margin: 40px auto;
  }
  p {
    max-width: 600px;
    margin: 0 auto;
  }
  a {
    display: inline-block;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 17px;
    padding: 5px 7px;
    margin: 10px 5px;
  }
  img {
    max-width: 700px;
    width: 100%;
    box-shadow: -1px 3px 35px -2px #000000d4;
  }
`;

const ProjectLink = styled(Link)`
  display: flex !important;
  width: fit-content;
  align-items: center;
`;

interface ProjectTemplateProps {
  project: Project;
  paths: {
    prev: string | null;
    next: string | null;
  };
}

export default function ProjectTemplate({
  project,
  paths,
}: ProjectTemplateProps) {
  return (
    <Page>
      <Main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {paths.prev && (
            <ProjectLink to={'/projects/' + paths.prev}>
              <ArrowLeft />
              Prev
            </ProjectLink>
          )}{' '}
          {paths.next && (
            <ProjectLink to={'/projects/' + paths.next}>
              Next
              <ArrowRight />
            </ProjectLink>
          )}
        </div>
        <h1>{project.title}</h1>
        <h2>{project.subtitle}</h2>
        <p>{project.description}</p>
        <div className="buttons">
          {project.live && <a href={project.live}>Visit Live</a>}
          {project.source && <a href={project.source}>View Source</a>}
        </div>
        <img src={project.image.large} alt="" />
      </Main>
    </Page>
  );
}
