import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})};
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0 0;
`;

const Link = styled.a`
  font-size: 15px 0;
  font-weight: 200;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const LogIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="User Name"></Input>
          <Input placeholder="Password"></Input>

          <Button>Log In</Button>
          <Link>Forget Your Password?</Link>
          <Link>Creat An Account!</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
