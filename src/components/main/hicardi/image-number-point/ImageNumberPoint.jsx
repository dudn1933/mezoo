import styled from "styled-components"
import { useContext } from 'react'
import { GlobalContext } from '../../../util/GlobalProvider'

const ImageNumberPoint = ({index, number, setDirection}) => {
    const { globalState } = useContext(GlobalContext);
    const { carouselNumber } = globalState;
    const onClickEvent = () => {
        const carouselSlide = document.querySelector('.carouselSlide');
        setDirection(index);
        carouselSlide.scrollTo({left:carouselNumber[index], behavior:'smooth'});
    }

    return (
        <StyledImageNumberPoint index={index} number={number} onClick={onClickEvent}/>
    )
}

export default ImageNumberPoint

const StyledImageNumberPoint = styled.div`
    cursor: pointer;
    background-color: ${({index, number}) => index === number ? '#cf227e' : 'transparent'};
    width:10px;
    height:10px;
    margin:5px;
    border: 1px solid #cf227e;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;    
`;
