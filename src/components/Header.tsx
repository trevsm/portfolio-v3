import {ReactNode, useState} from 'react';
import {Facebook, Instagram, Twitter} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {About} from '../modal_pages/About';
import {Contact} from '../modal_pages/Contact';
import Popup from './Popup';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  .social {
    a {
      font-size: 23px;
    }
    a:not(:last-child) {
      margin-right: 15px;
    }
  }
  .links {
    a {
      border-bottom: 1px solid;
      padding: 1px 0;
    }
    a:not(:last-child) {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Header = () => {
  const [element, setElement] = useState<ReactNode | null>(null);

  return (
    <>
      <Popup element={element} setElement={setElement} />
      <Nav>
        <div className="social">
          <a href="https://www.instagram.com/trev_sm/">
            <Instagram />
          </a>
          <a href="https://twitter.com/trev_sm">
            <Twitter />
          </a>
          <a href="https://www.facebook.com/trevjs/">
            <Facebook />
          </a>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="#" onClick={() => setElement(About)}>
            About
          </Link>
          <Link to="#" onClick={() => setElement(Contact)}>
            Contact
          </Link>
          <a href="/portfolio-v3/Trevor_Smith.pdf">Resume</a>
        </div>
      </Nav>
    </>
  );
};
