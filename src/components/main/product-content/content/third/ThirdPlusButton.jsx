import styled,{keyframes} from 'styled-components'
import {FcPlus} from 'react-icons/fc'
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider'
import ThirdContent from './ThirdContent';

const ThirdPlusButton = () => {
    const {globalState, globalDispatch} = useContext(GlobalContext);
    const { show, x, y } = globalState.mousePoint;
    
    const onShowTextBox = (e) => {
        const value = e.type === 'mouseenter' ? 3 : 0;
        globalDispatch({type: 'mousePointChange', payload: { show:value, x:x, y:y}})
    }

    const onMouseMove = (e) => {
        globalDispatch({type: 'mousePointChange', payload: {show:show, x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY}})
    }

    return (
        <StyledThirdPlusButton>
            <FcPlus onMouseEnter={onShowTextBox} onMouseLeave={onShowTextBox} onMouseMove={onMouseMove}/>
            {show === 3 && <ThirdContent />}
        </StyledThirdPlusButton>
    )
}

export default ThirdPlusButton

const StyledThirdPlusButton = styled.div`
    position: relative;

    > svg {        
        border-radius: 50%;
        position:absolute;
        right: -230px;
        bottom:-260px;
        stroke-width: 5px;
        font-size: 30px;
        stroke: #9bd347;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #9bd347;
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
            box-shadow: 0 0 8px #9bd347;
        }
    }
`;