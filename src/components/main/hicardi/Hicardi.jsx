import styled from 'styled-components'
import { useState, useContext } from 'react';
import HicardiDesc from './hicardi-desc/HicardiDesc'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { GlobalContext } from '../../util/GlobalProvider'

// 큰 carousel slider을 만들어보자.
const Hicardi = () => {
    const { globalDispatch } = useContext(GlobalContext);
    const hicardiArray = new Array(5).fill('');
    const [direction, setDirection] = useState(0);

    const carouselSlide = (e,direction) => {
        if(direction === -1 && e.target.tagName === 'polyline') {
            setDirection((direction) => direction + 1);
        } else if(direction === 1 && e.target.tagName === 'polyline'){
            setDirection((direction) => direction - 1);
        }
        globalDispatch({type: 'productChange', payload: {step:2}});
    }

    const hicardiDesc = () => {
        return hicardiArray.map((_,i) => {
            return <HicardiDesc key={i} index={i+1}/>
        })
    }

    return (
        <StyledHicardi className="Hicardi" direction={direction} >
            <FiChevronLeft onClick={(e) => carouselSlide(e,-1)} />
            <StyledCarousel direction={direction}>
                {hicardiDesc()}
            </StyledCarousel>
            <FiChevronRight onClick={(e) => carouselSlide(e,1)}/>
        </StyledHicardi>
    )
}

export default Hicardi

const StyledCarousel = styled.div`
    display:grid;
    grid-template-columns: repeat(5,100%);
    width:100%;
    height:100vh;
    transition: transform 0.5s ease-in-out;
    transform: ${({direction}) => `translateX(${100 * direction}%)`};
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
        &:last-child {
            position:absolute;
            pointer-events: ${({direction}) => direction === -4 ? `none` : null};
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