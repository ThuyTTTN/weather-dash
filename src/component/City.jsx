import styled from "styled-components";
import Colors from "../theme/Colors";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 25%;
  height: 100vh;
  border: 1px solid blue;
`;

const CityCard = styled.div`
  display: flex;
  background-color: white;
  align-self: center;
  height: 50%;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledInput = styled.input`
  font-size: 18px;
  height: 2rem;
  border-radius: 8px;
  padding-left: 10px;
`;
const StyledButton = styled.button`
  border-radius: 8px;
  font-size: 16px;
  width: 98%;
  height: 2rem;
  margin: 0.5rem 0;
`;

const City = () => {
  const searchCity = (event) => {
    event.preventDefault();
    console.log("submit to search city");
  };

  return (
    <Container>
      <CityCard>
        <form onSubmit={searchCity}>
          <label>
            <StyledInput type="text" name="city_name" placeholder="City Name" />
          </label>
          <StyledButton type="submit">Search</StyledButton>
        </form>
      </CityCard>
    </Container>
  );
};

export default City;
