
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"


const GlobalStyles = createGlobalStyle`
  body{
    background-color: #fff;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    *{
      font-family: "Roboto", serif;
    }
  }
`;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
`;

const theme = {
  colors: {
    primary:"darkBlue",
    secondary:"red",
  },
};



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <Title>
          styled components #1
        </Title>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default App