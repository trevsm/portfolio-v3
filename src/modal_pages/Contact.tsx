import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  form {
    display: flex;
    flex-direction: column;
    button {
      background-color: #4d6af6;
      border: none;
      width: fit-content;
      padding: 10px;
      border-radius: 5px;
    }
    input,
    textarea {
      font-size: 18px;
      color: #0f0f0f;
      width: 300px;
    }
    textarea {
      resize: none;
    }
    label {
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        margin-bottom: 5px;
      }
      margin-bottom: 10px;
    }
  }
`;

export const Contact = () => {
  return (
    <Container>
      <h1>Good Idea!</h1>
      <h2>Let&apos;s get in touch</h2>

      <form action="https://formspree.io/f/xqknrdzj" method="POST">
        <label>
          <span>Email:</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Message:</span>
          <textarea name="message" rows={5}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};
