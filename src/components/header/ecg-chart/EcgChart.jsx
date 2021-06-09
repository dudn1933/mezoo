import styled, {keyframes} from 'styled-components'
import { useState } from 'react';

const EcgChart = ({prodToggle, setProdToggle, deleteComponent, setDeleteComponent}) => {
    const [toggle,setToggle] = useState(true);

    const onMouseEnter = () => {
        setProdToggle(true);
        // setDeleteComponent(!deleteComponent);
       return setToggle(!toggle);
    }

    const titleMouseLeave = () => {
        return setToggle(!toggle);
    }

    return (
        <StyledEcgChart>
            <HiCardiTitle prodToggle={prodToggle} onMouseEnter={onMouseEnter} onMouseLeave={titleMouseLeave}>Hi Cardi</HiCardiTitle>
            <Monitor>
                <Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 200">
                    <Polyline toggle={toggle} points="486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113 "/>
                </Svg>
            </Monitor>   
        </StyledEcgChart>
    )
}

export default EcgChart;

const HiCardiTitle = styled.div`
    cursor: pointer;
    position:absolute;
    width:110px;
    height:30px;
    left:38%;
    top:-10%;
    background-color: transparent;
    color: ${({prodToggle}) => prodToggle ? `#cf227e` : `white`};
    font-size: 30px;
    font-weight: bold;
    transition: color 0.5s ease-in-out;
    &:hover {
        color: ${({prodToggle}) => prodToggle ? `#cf227e` : `white`}
    }
`;

const Svg = styled.svg`
	transition: all 0.3s ease-in-out;
`;

const Monitor = styled.div`
  background-color: transparent;
`;

const StyledEcgChart = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width:500px;
    height:200px;
    background-color: transparent;
`;

const ekg = keyframes`
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    50% {
      stroke-dashoffset: 2000;
    }
    85% {
        opacity: 1;
    }
    99% {
      stroke-dashoffset: 3000;
    }
    100% {
    opacity: 0;
      stroke-dashoffset: 1000;
    }
}
`;

const Polyline = styled.polyline`
    fill: none;
    stroke: #cf227e;
    transition: stroke .3s ease-in-out;
	stroke-width: 4;
	stroke-linecap: round;
	stroke-linejoin: miter;
	opacity: 0;
	stroke-dashoffset: 1000;
	stroke-dasharray: 1000;
	animation: ${ekg} 3s linear forwards infinite;
`;