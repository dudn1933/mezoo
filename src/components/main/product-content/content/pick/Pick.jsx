import styled, { keyframes } from "styled-components"
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';

const Pick = () => {
    const { globalState } = useContext(GlobalContext);
    const { imageToggle } = globalState;
    return (
        <StyledPick>
            <StyledContent imageToggle={imageToggle}>
            <h1>Pick a model, Wear It & Forget It.</h1>
                <StyledText>The important thing is healthcare data.</StyledText>
                <StyledText>You just hired watchdog for your body as bodyguard: Band, Belt, Patch, Watch etc.</StyledText>
                <StyledText>The healthcare data runs through the body to cloud.</StyledText>
            </StyledContent>
        </StyledPick>
    )
}

export default Pick

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

const StyledPick = styled.div`
    position:absolute;
    color: rgba(236,6,191,1);
    font-family: Lato, sans-serif;
    font-size: 34pt;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.2;

    top:45%;
`;

const StyledContent = styled.div`
    position:relative;

    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-name: ${({imageToggle}) => imageToggle.hidden ? contentAnimation : null };
    animation-fill-mode: forwards;
`;