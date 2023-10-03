import React, { useState } from "react";
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
  flex-direction: column;
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
  width: 50%;
  height: 2rem;
  margin: 0.5rem 0;
`;

const SearchedContainer = styled.div`
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const City = () => {
  const [cityName, setCityName] = useState("");
  const [searchedCities, setSearchedCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setCityName(event.target.value);
    setErrorMessage("");
  };

  const searchCity = (event) => {
    event.preventDefault();
    if (cityName.trim() !== "") {
      const updatedCities = [cityName, ...searchedCities.slice(0, 4)];
      setSearchedCities(updatedCities);
      setCityName("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a city name");
    }
  };

  return (
    <Container>
      <CityCard>
        <form onSubmit={searchCity}>
          <label>
            <StyledInput
              type="text"
              name="city_name"
              placeholder="City Name"
              value={cityName}
              onChange={handleInputChange}
            />
          </label>
          <StyledButton type="submit">Search</StyledButton>
        </form>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SearchedContainer>
          Searched City:
          {searchedCities.slice(0, 5).map((city, index) => (
            <StyledButton key={index}>{city}</StyledButton>
          ))}
        </SearchedContainer>
      </CityCard>
    </Container>
  );
};

export default City;
