import styled, { keyframes } from "styled-components"
import { useState, useContext } from 'react';
import { GlobalContext } from '../../util/GlobalProvider';

const Support = () => {
    const { globalState } = useContext(GlobalContext); 
    const { navigationBar, newsBar } = globalState;
    const [show, setShow] = useState(false);

    const onMouseEnter = () => {
        setShow(true);
    }

    const onMouseLeave = () => {
        setShow(false);
    }

    return (
        <StyledSupport onMouseLeave={onMouseLeave} show={show} navigationBar={navigationBar} newsBar={newsBar}>
            <StyledTitle onMouseEnter={onMouseEnter}>Contact & Support</StyledTitle>
            <StyledContent show={show}>
                <StyledCall>문의하기</StyledCall>
                <StyledCallMessage>MEZOO의 전문가와 상담하세요!</StyledCallMessage>
                <StyledEmail>help@me-zoo.com</StyledEmail>
            </StyledContent>
        </StyledSupport>
    )
}

export default Support

const StyledSupport = styled.div`
    position: absolute;
    z-index: 2;
    padding: 8px;
    right: ${({navigationBar}) => navigationBar.show ? '17%' : '7%'};
    top: ${({newsBar}) => newsBar.view ? '5.5%' : '10.3%'};
    width: 300px;
    height: ${({show}) => show ? '200px' : '40px'};
    border-radius: 10px;
    background: rgba(0,0,0,0.3);

    transition: height 0.3s ease-in-out;
`;

const StyledTitle = styled.div`
    cursor: pointer;
    color:white;
    height:40px;
    font-size: 32px;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    text-shadow: ${({theme}) => `2px 2px 2px ${theme.colors.main}`};
`;

const contentAnimation = keyframes`
    0% {
        opacity: 0;
    }

    70% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const StyledContent = styled.div`
    width:100%;
    height: 150px;
    background-color: transparent;
    color: white;
    padding: 20px 10px 0 10px;
    display:${({show}) => show ? 'block' : 'none'};
    box-sizing: border-box;
    display: ${({ show }) => show ? 'grid' : 'none'};
    grid-template-columns: repeat(1,3fr);
    align-items: center;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-name: ${({ show }) => show ? contentAnimation : null};
    animation-fill-mode: forwards;

    > svg {
        position: absolute;
        right: 0;
    }

    > div {
        width: 100%;
        &:not(:first-child) {
            margin-top: 20px;
        }
        &:last-child {
            width:50%;
        }
    }
`;

const StyledCall = styled.div`
    text-shadow: 2px 2px 2px black;
`;
const StyledCallMessage = styled.div`
    text-shadow: 2px 2px 2px black;
`;
const StyledEmail = styled.div`
    cursor: pointer;
    background-color: white;
    color: black;
    height:30px;
    ${({theme}) => theme.center}
    border-radius: 10px;
    padding: 0 10px;

    &:hover {
        color:white;
        background-color: ${({theme}) => theme.colors.main};
    }

    transition: all 0.3s ease-in-out;
`;

