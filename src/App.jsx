import './common/style/reset.css'
import { ThemeProvider } from "styled-components";
import theme from "./common/style/theme";
import Header from "./components/header/Header";
import Aside from './components/aside/Aside';
import Main from './components/main/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default App;
