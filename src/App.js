import "./App.css";
import styled from "styled-components";
import Weather from "./component/Weather";
import City from "./component/City";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Container className="App">
      <City />
      <Weather />
    </Container>
  );
}

export default App;
