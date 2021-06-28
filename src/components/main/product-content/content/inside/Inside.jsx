import styled, { keyframes } from "styled-components"
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';

const Inside = () => {
    const { globalState } = useContext(GlobalContext);
    const { imageToggle } = globalState;
    return (
        <StyledInside>
            <StyledContent imageToggle={imageToggle}>
            <h1>μBIC is Inside</h1>
            <p>Every Talkbody series has μBIC module inside.</p>
            </StyledContent>
        </StyledInside>
    )
}

export default Inside

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

const StyledInside = styled.div`
    position:absolute;
    color: rgba(236,6,191,1);
    font-family: Lato, sans-serif;
    font-size: 34pt;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.2;

    bottom:10%;
`;

const StyledContent = styled.div`
    position:relative;
    > p {
        color: black;
        font-size: 15pt;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25;
    }

    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-name: ${({imageToggle}) => imageToggle.hidden ? contentAnimation : null };
    animation-fill-mode: forwards;
`;