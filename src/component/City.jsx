import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  height: 500px;
  border: 1px solid blue;
`;

const City = () => {
  return <Container>this is the city component</Container>;
};

export default City;
