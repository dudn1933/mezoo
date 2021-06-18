import styled,{keyframes} from 'styled-components';
import {Link} from 'react-scroll';
import { useContext } from 'react';
import { GlobalContext } from '../../util/GlobalProvider'
import ProductContent from '../../main/product-content/ProductContent';

const Products = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const prodMouseLeave = () => {
        globalDispatch({ type:'productChange', payload: {hidden:false, step:1}});
    }

    const hiddenProd = () => {
        globalDispatch({ type:'productChange', payload: {hidden:false, step:1}});
    }

    // 이미지 클릭시 숨기는게 아니고 성능향상을 위해서 컴포넌트를 remove 할 방법을 생각해보기.
    return (
        <StyledProd pageScrollY={globalState.pageScrollY} point={globalState.point}>
            {globalState.productToggle.step !== 3 
            ? <HiCardiImage to='Hicardi' spy={true} smooth={true} 
                            productToggle={globalState.productToggle} 
                            onClick={hiddenProd} 
                            onMouseLeave={prodMouseLeave}/> 
            : (
                <StyledContent>
                    <HiCardiImage to='' productToggle={globalState.productToggle} />
                    <ProductContent className="너냐?"/>
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
    /* z-index: ${({pageScrollY}) => pageScrollY.scrollY < pageScrollY.first ? '2' : '-1'}; */
    position:fixed;
    left: ${({pageScrollY}) => pageScrollY.scrollY > pageScrollY.first ?  `10%`:  0};
    right: 0;
    bottom:${({pageScrollY}) => pageScrollY.scrollY > pageScrollY.first*1.3 ?  '40%' : `15%`};
    ${({theme}) => theme.center};
    ${({pageScrollY}) => pageScrollY.scrollY > pageScrollY.first*1.3 ? `justify-content: start;`: null};
    background-color:transparent;
`;

const contentAnimationTrue = keyframes`
    0% {
        opacity: 0;
        top:20px;
    }
    100% {
        opacity: 1;
        top:0px;
    }
`;

const HiCardiImage = styled(Link)`
    background: url('./image/hicardi.png');
    background-size: cover;
    background-repeat: no-repeat;
    width:250px;
    height:160px;
    filter: drop-shadow(0 0 4px black);
    opacity: ${({productToggle}) => productToggle.step === 2 ? 0 : null};
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-name: ${({productToggle}) => productToggle.step !== 2 ? contentAnimationTrue : null };
    animation-fill-mode: forwards;
`;