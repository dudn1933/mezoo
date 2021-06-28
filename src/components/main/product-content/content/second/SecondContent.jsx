import styled from 'styled-components'
import { useContext } from 'react';
import {GlobalContext} from '../../../../util/GlobalProvider';

const SecondContent = () => {
    const { globalState } = useContext(GlobalContext);

    return (
        <StyledSecondContent point={globalState.mousePoint}>
            Second-Content
        </StyledSecondContent>
    )
}

export default SecondContent

const StyledSecondContent = styled.div.attrs(({point}) => ({
    style: {
        top: point.y,
        left: 370+point.x
    }
}))`
    position:absolute;
    width: 400px;
    height:100px;
    background-color: white;
    border-radius: 10px;
    
    /* &:after {
        position:absolute;
        display: block;
        bottom:-10px;
        left:0;
        content: '';
        margin-left: 20px;
        background-color: transparent;
        width:0;
        height:0;
        border-width: 10px 10px 0px 10px;
        border-style: solid;
        border-color: white transparent transparent transparent;
        box-shadow: 0 1px 5px 0 #25aae1;
        transform: rotate(45deg);
    } */

    box-shadow: 0 0 5px #25aae1;

    ${({theme}) => theme.center};
`;
