import styled from 'styled-components';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
`;

export default function Page({children}: {children: React.ReactNode}) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
