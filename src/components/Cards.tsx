import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Project} from '../types';

const Container = styled(Link)`
  position: relative;
  min-height: 300px;
  background-color: #1d1d1d;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 1px 1px 3px #00000080;
  margin-bottom: 20px;
  z-index: 0;
  display: grid;
  align-items: end;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.04);
    box-shadow: 4px 4px 7px #00000040;
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgb(0 0 0 / 0%) 0%,
        rgb(0 0 0 / 61%) 70%
      );
    }
  }

  .content {
    z-index: 1;
  }

  .description,
  .title,
  .date {
    filter: drop-shadow(1px 1px 2px #00000080);
  }
  .title {
    font-size: 40px;
    font-weight: 400;
    margin: 0;
  }
  .description {
    font-size: 15px;
  }
  .langs {
    display: flex;
    flex-wrap: wrap;
    .item {
      margin: 5px;
      background-color: #292929;
      padding: 5px;
      border-radius: 3px;
    }
  }
`;

interface CardProps extends Project {
  link: string;
}

export function Card(props: CardProps) {
  return (
    <Container to={props.link}>
      <div className="img">
        <img src={props.image.small} alt="" />
      </div>
      <div className="content">
        <p className="date">{props.date}</p>
        <h3 className="title">{props.title}</h3>
        <p className="description">{props.subtitle}</p>
        <div className="langs">
          {props.langs.map((lang, index) => (
            <div key={index} className="item">
              {lang}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const SmallContainer = styled(Container)`
  min-height: 100px;
  padding: 20px;
`;

export function SmallCard(props: Omit<CardProps, 'description'>) {
  return (
    <SmallContainer to={props.link}>
      <div className="img">
        <img src={props.image.small} alt="" />
      </div>
      <div className="content">
        <p className="date">{props.date}</p>
        <p className="description">{props.subtitle}</p>
        <div className="langs">
          {props.langs.map((lang, index) => (
            <div key={index} className="item">
              {lang}
            </div>
          ))}
        </div>
      </div>
    </SmallContainer>
  );
}
