import styled from "styled-components";
import Forecast from "./Forecast";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 70%;
  border: 1px solid red;
`;

const ForecastContainer = styled.div`
  height: 40%;
`;

const Weather = () => {
  return (
    <Container>
      this is the weather data with image and hi/lo
      <ForecastContainer>
        <Forecast />
      </ForecastContainer>
    </Container>
  );
};

export default Weather;
