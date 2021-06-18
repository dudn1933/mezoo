import styled from 'styled-components'
import {FcPlus} from 'react-icons/fc'
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider'
import SecondContent from './SecondContent';

const SecondPlusButton = () => {
    const {globalState, globalDispatch} = useContext(GlobalContext);
    const { show, x, y } = globalState.mousePoint;
    
    const onShowTextBox = (e) => {
        const value = e.type === 'mouseenter' ? 2 : 0;
        globalDispatch({type: 'mousePointChange', payload: { show:value, x:x, y:y}})
    }

    const onMouseMove = (e) => {
        globalDispatch({type: 'mousePointChange', payload: {show:show, x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY}})
    }

    return (
        <StyledSecondPlusButton>
            <FcPlus onMouseEnter={onShowTextBox} onMouseLeave={onShowTextBox} onMouseMove={onMouseMove}/>
            {show === 2 && <SecondContent />}
            {/* <SecondContent /> */}
        </StyledSecondPlusButton>
    )
}

export default SecondPlusButton

const StyledSecondPlusButton = styled.div`
    position: relative;

    > svg {
        border-radius: 50%;
        position:absolute;
        top:60px;
        right:-330px;
        stroke-width: 5px;
        font-size: 30px;
        stroke: #25aae1;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #25aae1;
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
            box-shadow: 0 0 8px #25aae1;
        }
    }
`;