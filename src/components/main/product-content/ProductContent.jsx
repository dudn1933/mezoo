import styled,{keyframes} from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../../util/GlobalProvider';
import FirstPlusButton from './content/first/FirstPlusButton';
import SecondPlusButton from './content/second/SecondPlusButton';
import ThirdPlusButton from './content/third/ThirdPlusButton';

const ProductContent = () => {
    const { globalState } = useContext(GlobalContext);
    const { imageToggle } = globalState;

    return (
        <StyledProductContent imageToggle={imageToggle}>
            <FirstPlusButton />
            <SecondPlusButton />
            <ThirdPlusButton />
        </StyledProductContent>
    )
}

export default ProductContent;

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

const StyledProductContent = styled.div`
    position: absolute;
    z-index: 4;
    ${({theme}) => theme.center}

    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-name: ${contentAnimationTrue};
    animation-fill-mode: forwards;
`;
