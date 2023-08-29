import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ImgContainer = styled.div`
  height: 180px;
  border-radius: 1rem;
  background-image: ".Img/library.jpg";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  padding: 20px 20px;
  max-width: 480px;

  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  font-size: 60px;
`;

const Ul = styled.ul`
  padding-top: 20px;
`;

const List = styled.li`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
  border-radius: 30px;
  font-size: 40px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Main() {
  return (
    <Container>
      <Header>
        <Title>구미 도서관</Title>
      </Header>
      <Ul>
        <List>
          <Link to={{ pathname: "/adult", state: { name: "adult" } }}>
            <div>일반 자료실</div>
          </Link>
        </List>
        <List>
          <Link to={{ pathname: "/child", state: { name: "child" } }}>
            <div>어린이 자료실</div>
          </Link>
        </List>
        <List>
          <Link to={{ pathname: "/reference", state: { name: "reference" } }}>
            <div>참고 자료실</div>
          </Link>
        </List>
        <List>
          <Link to={{ pathname: "/imgtest", state: { name: "imgtest" } }}>
            <div>이미지 테스트실</div>
          </Link>
        </List>
      </Ul>
    </Container>
  );
}

export default Main;
