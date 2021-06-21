import './common/style/reset.css'
import { ThemeProvider } from "styled-components";
import { GlobalContext } from './components/util/GlobalProvider';
import { useState, useEffect, useContext } from "react";
import theme from "./common/style/theme";
import styled from 'styled-components';
import Header from "./components/header/Header";
import Aside from './components/aside/Aside';
import Hicardi from './components/main/hicardi/Hicardi';
import ProductContentView from './components/main/product-content/ProductContentView'
import HicardiAdvantages from './components/main/hicardi-advantages/HicardiAdvantages';
import Footer from './components/footer/Footer';


const App = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);
  const { offsetTop } = globalState;

  const resize = () => {
    const prodLocation = document.querySelector(".Hicardi").offsetTop;
    const contentLocation = document.querySelector(".productContentView").offsetTop;
    const advantageLocation = document.querySelector(".advantage").offsetTop;
    globalDispatch({ type: "offsetTopChange", payload: { prodLocation: prodLocation, contentLocation: contentLocation, advantageLocation: advantageLocation }});
  }

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize',resize);
  }, []);

  const onScrollEvent = (event) => {
    if(event.target.scrollTop < offsetTop.prodLocation) globalDispatch({ type: "productChange", payload: {hidden: true, step: 1, animation:false } });
    else if(event.target.scrollTop < offsetTop.contentLocation) globalDispatch({ type: "productChange", payload: { hidden: false, step: 3, animation:true } });
    else if(event.target.scrollTop === offsetTop.contentLocation) globalDispatch({ type: "productChange", payload: { hidden: true, step: 3, animation:true} });
    else if(event.target.scrollTop > offsetTop.contentLocation) globalDispatch({ type: "productChange", payload: { hidden: false, step: 3, animation:true } });
  }

  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <StyledApp className="main" onScroll={onScrollEvent}>
        <Header />
        <Hicardi />
        <ProductContentView />
        <HicardiAdvantages />
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
`;