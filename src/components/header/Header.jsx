import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../util/GlobalProvider';
import EcgChart from './ecg-chart/EcgChart';
import Products from './products/Products';
import ProductContent from '../main/product-content/ProductContent';

const Header = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const [ offsetTop, setOffsetTop] = useState({});

    useEffect(() => {
        const prodLocation = document.querySelector('.Hicardi').offsetTop;
        const contentLocation = document.querySelector('.productContentView').offsetTop;
        setOffsetTop({prodLocation, contentLocation});
    },[]);
    
    useEffect(() => {
        var timer;
                                                    //Scrolling event start
        const onWheelHandler = async (e) => {
            const scrolled = window.scrollY;
            clearTimeout(timer);
                                                    //Renew timer
            timer = setTimeout(() => {
                if(checkScrollDirection(e,scrolled)) {
                    if(scrolled>offsetTop.prodLocation-offsetTop.prodLocation*0.6 && scrolled < offsetTop.prodLocation+offsetTop.prodLocation*0.4) {
                        window.scrollTo({top:offsetTop.prodLocation, behavior:'smooth'});
                        globalDispatch({type:'productChange', payload: {step:2}});
                    }
                    else if(scrolled > offsetTop.prodLocation+offsetTop.prodLocation*0.4) {
                        window.scrollTo({top:offsetTop.contentLocation, behavior:'smooth'}); 
                        globalDispatch({type:'productChange', payload: {step:3}});
                    }
                } else { 
                    if(scrolled < offsetTop.prodLocation) window.scrollTo({top:0, behavior:'smooth'});
                    else if(scrolled<offsetTop.contentLocation-offsetTop.contentLocation*0.1) {
                        window.scrollTo({top:offsetTop.prodLocation, behavior:'smooth'});
                        globalDispatch({type:'productChange', payload: {step:2}});
                    }
                } 
            }, 100);
        };

        window.addEventListener('wheel', onWheelHandler);

        return () => window.removeEventListener('wheel', onWheelHandler);

    },[globalState.pageScrollY.scrollY]);

    function checkScrollDirection(event,scrolled) {
        globalDispatch({type:'productChange', payload: {step:1}});    
        globalDispatch({type:'pageScrollValueChange', payload:{scrollY:scrolled, first:offsetTop.prodLocation, second:offsetTop.contentLocation}});
        if (checkScrollDirectionIsUp(event)) {
            return false;
        } else {
            return true;
        }
    }
    function checkScrollDirectionIsUp(event) {      
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        } else {
            return event.deltaY < 0;
        }
    }
    
    return (
        <StyledHeader id="header">
            <EcgChart />
            <Products />
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    z-index: -1;
    ${({theme}) => theme.center}
    scroll-snap-align:start;
    scroll-snap-stop:always;
    background: url('./image/background-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.1);
    width:100%;
    height:100vh;
`;