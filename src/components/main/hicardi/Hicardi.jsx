import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react';
import HicardiDesc from './hicardi-desc/HicardiDesc'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { GlobalContext } from '../../util/GlobalProvider'
import ImageNumberPoint from './image-number-point/ImageNumberPoint';

// 큰 carousel slider을 만들어보자.
const Hicardi = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { carouselNumber } = globalState;
    const [direction, setDirection] = useState(0);
    const [scrollBy, setScrollBy] = useState(0);
    const carousel = document.querySelector('.carouselSlide');
    const hicardiArray = new Array(5).fill('');
    const Number = new Map();

    useEffect(() => {
        const pointNumber = new Array(5).fill('').map((v,i) => {
            return document.querySelector(`.hicardiDesc${i}`).offsetLeft;
        });
        for(let i=0; i<pointNumber.length; i++) {
            Number[i] = pointNumber[i]
        }
        globalDispatch({ type: 'carouselNumberRegister', payload: Number });
    },[globalState.offsetTop]);

    const carouselSlide = (e,directionValue,wayValue) => {
        if(wayValue === -1 && e.target.tagName === 'polyline') {
            setDirection(directionValue - 1);
            carousel.scrollTo({left:carouselNumber[direction-1], behavior:'smooth'});
        } else if(wayValue === 1 && e.target.tagName === 'polyline') {
            setDirection(directionValue + 1);
            carousel.scrollTo({left:carouselNumber[direction+1], behavior:'smooth'});
        }
    }

    const hicardiDesc = () => {
        return hicardiArray.map((_,i) => {
            return <HicardiDesc key={i} index={i} direction={direction}/>
        })
    }

    const imageList = () => {
        return new Array(5).fill(0).map((v,i) => {
            return <ImageNumberPoint key={i} index={i} number={direction} setDirection={setDirection}/>
        })
    }

    const onScrollEvent = (event,direction) => {
        const scrolled = carousel.scrollLeft;
        // let timer = null;
        // clearTimeout(timer);
        // timer = setTimeout(() => {
            if(scrolled === carouselNumber[0]) setDirection(0);
            else if(scrolled === carouselNumber[1]) setDirection(1);
            else if(scrolled === carouselNumber[2]) setDirection(2);
            else if(scrolled === carouselNumber[3]) setDirection(3);
            else if(scrolled === carouselNumber[4]) setDirection(4);
        // },100)
    }

    return (
        <StyledHicardi className="Hicardi" direction={direction} >
            <FiChevronLeft onClick={(e) => carouselSlide(e,direction,-1)} />
            <StyledCarousel className="carouselSlide" direction={direction} onScroll={(e) => onScrollEvent(e,direction)}>
                {hicardiDesc()}
            </StyledCarousel>
            <FiChevronRight onClick={(e) => carouselSlide(e,direction,1)}/>
            <StyledImageNumber>
                {imageList()}
            </StyledImageNumber>
        </StyledHicardi>
    )
}

export default Hicardi

const StyledImageNumber = styled.div`
    position:absolute;
    ${({theme}) => theme.center}
    width:100%;
    bottom:5%;
`;

const StyledCarousel = styled.div`
    display:grid;
    grid-template-columns: repeat(5,100%);
    width:100%;
    height:100vh;
    transition: transform 0.5s ease-in-out;
    /* transform: ${({direction}) => `translateX(${100 * direction}%)`}; */
    overflow-x: auto;
    scroll-snap-type: x mandatory;
`;

const StyledHicardi = styled.div`
    display:flex;
    scroll-snap-align: start;
    scroll-snap-stop:always;
    position:relative;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    height:100vh;
    background-color:white;

    > svg {        
        z-index: 200;
        &:first-child {
            position:absolute;
            pointer-events: ${({direction}) => direction === 0 ? `none` : null};
            height:100vh;
            left:0;
            font-size: 1000%;
            color: #e5e5e5;
        }
        &:nth-child(3) {
            position:absolute;
            pointer-events: ${({direction}) => direction === 4 ? `none` : null};
            height:100vh;
            right:0;
            font-size: 1000%;
            color: #e5e5e5;
        }
        > polyline {
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
                color: #cf227e;
            }
        }
    }
`;