import {ReactNode} from 'react';
import {X} from 'react-bootstrap-icons';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0000007b;
  display: grid;
  align-items: center;
  justify-content: center;
  .popup-inner {
    position: relative;
    border-radius: 20px;
    background-color: #494949;
    min-width: 200px;
    min-height: 200px;
    max-width: 700px;
    padding: 30px;
    .close {
      font-size: 30px;
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px;
      cursor: pointer;
    }
  }
`;

export default function Popup({
  element,
  setElement,
}: {
  element: ReactNode | null;
  setElement: (value: ReactNode | null) => void;
}) {
  if (element)
    return (
      <Container>
        <div className="popup-inner">
          <X className="close" onClick={() => setElement(null)} />
          {element}
        </div>
      </Container>
    );
  return null;
}
