import { styled } from "styled-components";

const BG = styled.div`
  height: 180px;
  max-width: 100%;
  border-radius: 1rem;
  background-image: "Img/library.jpg";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function ImgTest() {
  return <BG></BG>;
}

export default ImgTest;
