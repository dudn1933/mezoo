import styled, {keyframes} from 'styled-components'
import { useContext } from 'react';
import { GlobalContext } from '../../util/GlobalProvider';

const EcgChart = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const onMouseEnter = () => {
        // console.log(globalState.imageToggle)
        // globalDispatch({ type:'productChange', payload:{hidden:!globalState.imageToggle.hidden, step:1}} );
    }

    const titleMouseLeave = () => {
        // console.log(globalState.imageToggle)
        // globalDispatch({ type:'productChange', payload:{hidden:!globalState.imageToggle.hidden, step:1}} );
    }

    return (
        <StyledEcgChart>
            {/* 여기에 title 이 있어야 하는지? 상위 component로 올릴 수 있으면 올리는게 좋을 듯 함. 순수하게 chart 역할만 하는 component로 분리하기. */}
            <HiCardiTitle imageToggle={globalState.imageToggle} onMouseEnter={onMouseEnter} onMouseLeave={titleMouseLeave}>Hi Cardi</HiCardiTitle>
            <Monitor>
                <Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 200">
                    <Polyline points="486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113 "/>
                </Svg>
            </Monitor>   
        </StyledEcgChart>
    )
}

export default EcgChart;

const HiCardiTitle = styled.div`
    cursor: pointer;
    text-align: center;
    height:30px;
    margin:auto;
    background-color: transparent;
    color: white;
    /* color: ${({imageToggle}) => imageToggle.hidden ? `#cf227e` : `white` }; */
    font-size: 30px;
    font-weight: bold;
    transition: color 0.5s ease-in-out;
    &:hover {
        color: ${({imageToggle}) => imageToggle.hidden ?  `#cf227e` : `white` }
    }
`;

const Svg = styled.svg`
	transition: all 0.3s ease-in-out;
`;

const Monitor = styled.div`
  background-color: transparent;
`;

const StyledEcgChart = styled.div`
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