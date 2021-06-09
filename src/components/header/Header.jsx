import styled from 'styled-components'
import { useState, useEffect } from 'react';
import EcgChart from './ecg-chart/EcgChart';
import Products from './products/Products';

const Header = () => {
    const [productToggle, setProductToggle] = useState(false);
    const [deleteComponent, setDeleteComponent] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            setScrollY(scrollValue)
            if(scrollValue > 100) setDeleteComponent(false);
            else setDeleteComponent(true);
        });
    },[scrollY])
    

    return (
        <div id="header">"
            <StyledBackground className="배경" scrollY={scrollY} />
            <StyledHeader className="너냐?">
                <EcgChart prodToggle={productToggle} setProdToggle={setProductToggle} deleteComponent={deleteComponent} setDeleteComponent={setDeleteComponent}/>
                { deleteComponent && <Products prodToggle={productToggle} setProdToggle={setProductToggle}/> }
            </StyledHeader>
        </div>
    )
}

export default Header;

const StyledBackground = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index: -100;
    background: url('./image/background-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height: 150vh;
    transform: ${({scrollY}) => `translateY(-${scrollY/2}px)`};
    background-attachment: fixed;
`;

const StyledHeader = styled.div`
    position:absolute;
    top:0;
    background-color: rgba(0, 0, 0, 0.1);
    width:100%;
    height:100vh;

    scroll-snap-align: center;
`;