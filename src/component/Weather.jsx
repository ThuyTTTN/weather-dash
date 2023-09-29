import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  border: 1px solid red;
`;

const Weather = () => {
  return <Container>this is the weather data with image and hi/lo</Container>;
};

export default Weather;
