import { useQuery } from "react-query";
import { styled } from "styled-components";
import { fetchReference } from "../api";
import { IReferenceTypes } from "../atom";

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

function Reference() {
  const { isLoading, data } = useQuery("ReferenceLibrary", fetchReference);
  console.log(data);
  const reference: IReferenceTypes[] = data?.data;
  console.log(reference);
  return (
    <Container>
      <Header>
        <Title>참고 자료실</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ul>
          {reference?.map((detail) => (
            <Li key={detail.순번}>{detail.서명}</Li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Reference;
