import { useQuery } from "react-query";
import { styled } from "styled-components";
import { fetchCoins } from "../api";
import { IbookTypes } from "../atom";

const Container = styled.div``;

const Header = styled.header``;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
`;

const Loader = styled.span``;

const Li = styled.li`
  color: ${(props) => props.theme.accentColor};
`;

function Main() {
  const { isLoading, data } = useQuery("allLibrary", fetchCoins);
  const book: IbookTypes[] = data?.data;
  console.log(book);
  return (
    <Container>
      <Header>
        <Title>Small Library</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ul>
          {book?.map((detail) => (
            <Li key={detail.번호}>{detail.서명}</Li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Main;
