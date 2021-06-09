import './common/style/reset.css'
import { ThemeProvider } from "styled-components";
import theme from "./common/style/theme";
import styled from 'styled-components';
import Header from "./components/header/Header";
import Aside from './components/aside/Aside';
import Main from './components/main/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <StyledApp>
        <Header />
        <Main />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;

const StyledApp = styled.div`
  position:relative;
  scroll-snap-type: y mandatory;
`;