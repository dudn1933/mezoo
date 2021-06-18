import './common/style/reset.css'
import { ThemeProvider } from "styled-components";
import GlobalProvider from "./components/util/GlobalProvider";
import theme from "./common/style/theme";
import styled from 'styled-components';
import Header from "./components/header/Header";
import Aside from './components/aside/Aside';
import Hicardi from './components/main/hicardi/Hicardi';
import ProductContentView from './components/main/product-content/ProductContentView'
import HicardiAdvantages from './components/main/hicardi-advantages/HicardiAdvantages';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <StyledApp>
        <GlobalProvider>
          <Header />
          <Hicardi />
          <ProductContentView />
          <HicardiAdvantages />
        </GlobalProvider>
      </StyledApp>
    </ThemeProvider>


  );
};

export default App;

const StyledApp = styled.div`
  width:100%;
  /* overflow:auto; */
  height:100vh;
  /* scroll-snap-type: y mandatory; */
`;