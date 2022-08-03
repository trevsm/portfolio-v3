import styled from 'styled-components';
import {Project} from '../types';
import Page from '../templates/Page';

const Main = styled.div`
  text-align: center;
  margin: 80px 0;
  .buttons {
    margin-top: 70px;
    margin-bottom: 10px;
  }
  h1 {
    text-decoration: underline;
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

export default function ProjectTemplate(props: Project) {
  return (
    <Page>
      <Main>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.description}</p>
        <div className="buttons">
          {props.live && <a href={props.live}>Visit Live</a>}
          {props.source && <a href={props.source}>View Source</a>}
        </div>
        <img src={props.image.large} alt="" />
      </Main>
    </Page>
  );
}
