import styled from 'styled-components';
import {Link} from 'react-scroll';

const Products = ({prodToggle, setProdToggle}) => {
    const prodMouseLeave = () => {
        return setProdToggle(false);
    }

    const hiddenProd = () => {
        setProdToggle(!prodToggle);
    }


    return (
        <StyledProd>
            <HiCardiImage to='Hicardi' spy={true} smooth={true} prodToggle={prodToggle} onClick={hiddenProd} onMouseLeave={prodMouseLeave}/>
            <VetWaveImage to='Vetwave' spy={true} smooth={true} prodToggle={prodToggle} onClick={hiddenProd} onMouseLeave={prodMouseLeave} />
        </StyledProd>
    )
}

export default Products

const StyledProd = styled.div`
    position:fixed;
    left:0;
    right:0;
    bottom:15%;
    width: 100%;
    display: flex;
    ${({theme}) => theme.center};
    justify-content: space-evenly;
    background-color:transparent;
`;

const HiCardiImage = styled(Link)`
    cursor: pointer;
    background: url('./image/hicardi.png');
    background-size: cover;
    background-repeat: no-repeat;
    width:250px;
    height:160px;
    opacity: ${({prodToggle}) => prodToggle ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
`;

const VetWaveImage = styled(Link)`
    cursor: pointer;
    background: url('./image/vetwave.png');
    background-size: cover;
    background-repeat: no-repeat;
    width:250px;
    height:160px;
    opacity: ${({prodToggle}) => prodToggle ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
`;