import styled from 'styled-components';

const Container = styled.footer`
  padding: 50px 0;
  text-align: center;
`;

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <div>&copy; Copyright {year}</div>
    </Container>
  );
};
