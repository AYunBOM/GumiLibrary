import { useQuery } from "react-query";
import { styled } from "styled-components";
import { fetchAdult } from "../api";
import { IAdultTypes } from "../atom";

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

function Adult() {
  const { isLoading, data } = useQuery("AdultLibrary", fetchAdult);
  console.log(data);
  const adult: IAdultTypes[] = data?.data;
  console.log(adult);
  return (
    <Container>
      <Header>
        <Title>일반 자료실</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ul>
          {adult?.map((detail) => (
            <Li key={detail.번호}>{detail.서명}</Li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Adult;
