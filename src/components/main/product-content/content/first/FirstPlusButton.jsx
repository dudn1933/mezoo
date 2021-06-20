import styled from 'styled-components';
import { useContext } from 'react';
import { FcPlus } from 'react-icons/fc'
import FirstContent from './FirstContent';
import { GlobalContext } from '../../../../util/GlobalProvider';

const FirstPlusButton = () => {
    const {globalState, globalDispatch} = useContext(GlobalContext);
    const { show, x, y } = globalState.mousePoint;
    
    const onShowTextBox = (e) => {
        const value = e.type === 'mouseenter' ? 1 : 0;
        globalDispatch({type: 'mousePointChange', payload: {show:value, x:x, y:y}})
    }

    const onMouseMove = (e) => {
        globalDispatch({type: 'mousePointChange', payload: {show:show, x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY}})
    }

    return (
        <StyledFirstPlusButton>
            <FcPlus onMouseEnter={onShowTextBox} onMouseLeave={onShowTextBox} onMouseMove={onMouseMove}/>
            {show === 1 && <FirstContent />}
        </StyledFirstPlusButton>
    )
}

export default FirstPlusButton;

const StyledFirstPlusButton = styled.div`
    position: relative;
    pointer-events: fill;

    > svg {
        border-radius: 50%;
        position:absolute;
        left: 160px;
        top: -100px;
        stroke-width: 5px;
        font-size: 30px;
        stroke: #f28e06;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #f28e06;
            > rect {
                &:first-child {
                    x: 23.5px;
                    width: .01px;
                }
                &:last-child {
                    y: 23.5px;
                    height: .01px;
                }
            }
        }
        &:hover {
            box-shadow: 0 0 8px #f28e06;
        }
    }
`;

