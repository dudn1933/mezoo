import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../../util/GlobalProvider'
import ProductContent from '../../main/product-content/ProductContent';

const Products = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const prodMouseLeave = () => {
        globalDispatch({ type:'productChange', payload: {step:1}});
    }

    const hiddenProd = () => {
        globalDispatch({ type:'productChange', payload: {step:2}});
    }

    // 이미지 클릭시 숨기는게 아니고 성능향상을 위해서 컴포넌트를 remove 할 방법을 생각해보기.
    return (
        <StyledProd imageToggle={globalState.imageToggle} point={globalState.point}>
            {globalState.imageToggle.step !== 3 
            ? <HiCardiImage to='Hicardi' spy={true} smooth={true} 
                            imageToggle={globalState.imageToggle} 
                            onClick={hiddenProd} 
                            onMouseLeave={prodMouseLeave}/> 
            : (
                <StyledContent>
                    <HiCardiImage to='' imageToggle={globalState.imageToggle} />
                    { globalState.imageToggle.animation ? <ProductContent/> : null }
                </StyledContent>
            )}
        </StyledProd>
    )
}

export default Products

const StyledContent = styled.div`
    display: flex;
    position:relative;
    width:250px;
    height:160px;
`;

const StyledProd = styled.div`
    z-index: 2;
    pointer-events: none;
    position:fixed;
    opacity: ${({imageToggle}) => imageToggle.hidden ? 1 : 0};
    left: ${({imageToggle}) => imageToggle.step === 3 ?  `10%`:  0};
    right: 0;
    bottom:${({imageToggle}) => imageToggle.step === 3 ?  '40%' : `15%`};
    ${({theme}) => theme.center};
    ${({imageToggle}) => imageToggle.step === 3 ? `justify-content: start;`: null};
    background-color:transparent;
    transition: ${({imageToggle}) => imageToggle.animation ? 'opacity 0.3s ease-in-out' : null};
`;

const HiCardiImage = styled.div`
    background: url('./image/hicardi.png');
    background-size: cover;
    background-repeat: no-repeat;
    width:250px;
    height:160px;
    filter: drop-shadow(0 0 4px black);
`;