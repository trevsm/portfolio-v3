import styled from 'styled-components';
import {Profile} from '../images';

const Container = styled.div`
  padding: 30px;
  img {
    border-radius: 500px;
    background-color: #2a2a2a;
  }
  .name {
    display: block;
  }
  .flex {
    display: flex;
    .col {
      flex: 100%;
      :first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: 650px) {
    .name {
      padding-bottom: 10px;
    }
    img {
      width: 100px;
    }
    p {
      margin: 0;
      margin-bottom: 10px;
    }
    .flex {
      flex-direction: column;
    }
  }
`;

export const About = () => {
  return (
    <Container>
      <h1>Just a little about me...</h1>
      <div className="flex">
        <div className="col">
          <img src={Profile} alt="asdf" />
          <span className="name">Trevor Smith</span>
        </div>
        <div className="col">
          <p>
            I’m currently a Senior at Weber State University pursuing a
            Bachelor’s Degree in Computer Science. (Spring 2024) 💻
          </p>
          <p>At the moment, I’m into Typescript, React, & Three.js.</p>
          <p>
            Outside of school and work, I really like swimming, biking, hiking
            and all things outside! ⛰️
          </p>
          <p>
            I have also enjoyed learning 3D-Modeling with blender and Adobe
            Illustrator. 🎨
          </p>
        </div>
      </div>
    </Container>
  );
};
