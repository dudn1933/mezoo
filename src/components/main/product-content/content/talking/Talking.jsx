import styled, { keyframes } from "styled-components"
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';

const Talking = () => {
    const { globalState } = useContext(GlobalContext);
    const { imageToggle } = globalState;
    return (
        <StyledTalking>
            <StyledContent imageToggle={imageToggle}>
            <h1>Let the Body Do the Talking</h1>
                <StyledText>The various signs come from your body whenever you eat, sleep, walk, run, breath.</StyledText>
                <StyledText>No one knows the meaning of the signal because you can't see it.</StyledText>
                <StyledText>However, we can interpret and visualize the signals.</StyledText>
            </StyledContent>
        </StyledTalking>
    )
}

export default Talking;

const StyledText = styled.div`
    color: black;
    font-size: 15pt;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
`;

const contentAnimation = keyframes`
    0% {
        opacity: 0;
        top:30px;
    }
    100% {
        opacity: 1;
        top:0px;
    }
`;

const StyledTalking = styled.div`
    position:absolute;
    color: rgba(236,6,191,1);
    font-family: Lato, sans-serif;
    font-size: 34pt;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.2;

    top:10%;
`;

const StyledContent = styled.div`
    position:relative;

    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-name: ${({imageToggle}) => imageToggle.hidden ? contentAnimation : null };
    animation-fill-mode: forwards;
`;