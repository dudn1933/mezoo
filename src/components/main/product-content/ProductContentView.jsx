import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../../util/GlobalProvider'
import Talking from './content/talking/Talking';
import Pick from './content/pick/Pick';
import Inside from './content/inside/Inside';

const ProductContentView = () => {
    const { globalState } = useContext(GlobalContext);
    const { imageToggle } = globalState;

    return (
        <StyledProductContentView className="productContentView">
            <StyledBackGround />
            {imageToggle.step === 3 
            ? <HicardiFunction imageToggle={imageToggle}>
                <Talking />
                <Pick />
                <Inside />
            </HicardiFunction>
            : null}
        </StyledProductContentView>

    )
}

export default ProductContentView

const StyledProductContentView = styled.div`
    flex:none;
    scroll-snap-align: start;
    scroll-snap-stop:always;
    z-index: 2;

    width:100%;
    height:100vh;
`;

const StyledBackGround = styled.div`
    background: url('./image/hospital.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height:100vh;
    opacity: 0.3;
`;

const HicardiFunction = styled.div`
    pointer-events: none;
    position:absolute;
    width:50%;
    top:0;
    right:10%;
    height:100vh;
    display:grid;


    opacity: ${({imageToggle}) => imageToggle.hidden ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
`;