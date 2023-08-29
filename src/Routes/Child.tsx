import { useQuery } from "react-query";
import { styled } from "styled-components";
import { fetchChild } from "../api";
import { IChildTypes } from "../atom";

const Container = styled.div`
  padding: 0px 20px;
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

const Loader = styled.span``;

const Li = styled.li`
  margin-bottom: 10px;
  border-radius: 15px;
`;

function Child() {
  const { isLoading, data } = useQuery("ChildLibrary", fetchChild);
  console.log(data);
  const child: IChildTypes[] = data?.data;
  console.log(child);
  return (
    <Container>
      <Header>
        <Title>어린이 자료실</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ul>
          {child?.map((detail) => (
            <Li key={detail.순번}>{detail.서명}</Li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Child;
