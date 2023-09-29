import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid yellow;
  background-color: white;
  height: 100%;
`;

const Forecast = () => {
  return <Container>this is forecast component</Container>;
};

export default Forecast;
