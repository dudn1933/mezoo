import './common/style/reset.css'
import { ThemeProvider } from "styled-components";
import { GlobalContext } from './components/util/GlobalProvider';
import { useEffect, useContext } from "react";
import theme from "./common/style/theme";
import styled from 'styled-components';
import Header from "./components/header/Header";
import Aside from './components/aside/Aside';
import Hicardi from './components/main/hicardi/Hicardi';
import ProductContentView from './components/main/product-content/ProductContentView'
import HicardiUse from './components/main/hicardi-use/HicardiUse';
import Footer from './components/footer/Footer';


const App = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);
  const { offsetTop } = globalState;

  const resize = () => {
    const prodLocation = document.querySelector(".Hicardi").offsetTop;
    const contentLocation = document.querySelector(".productContentView").offsetTop;
    const useLocation = document.querySelector(".use").offsetTop;
    const footerLocation = document.querySelector(".footer").offsetTop;
    globalDispatch({ type: "offsetTopChange", payload: { mainLocation: 0, prodLocation: prodLocation, contentLocation: contentLocation, useLocation: useLocation, footerLocation: footerLocation }});
    globalDispatch({type: 'screenSizeRegister', payload: window.innerWidth });
  }

  useEffect(() => {
    resize();
    globalDispatch({type: 'screenSizeRegister', payload: window.innerWidth });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize',resize);
  }, []);

  const onScrollEvent = (event) => {
    if(event.target.scrollTop < offsetTop.prodLocation) globalDispatch({ type: "productChange", payload: {hidden: true, step: 1, animation:true } });
    else if(event.target.scrollTop < offsetTop.contentLocation) globalDispatch({ type: "productChange", payload: { hidden: false, step: 3, animation:false } });
    else if(event.target.scrollTop === offsetTop.contentLocation) globalDispatch({ type: "productChange", payload: { hidden: true, step: 3, animation:true} });
    else if(event.target.scrollTop > offsetTop.contentLocation) globalDispatch({ type: "productChange", payload: { hidden: false, step: 3, animation:false } });
  }

  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <StyledApp className="main" onScroll={onScrollEvent}>
        <Header/>
        <Hicardi />
        <ProductContentView />
        <HicardiUse />
        <Footer />
      </StyledApp>
    </ThemeProvider>


  );
};

export default App;

const StyledApp = styled.div`
  width:100%;
  overflow:scroll;
  height:100vh;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;