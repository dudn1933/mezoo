import styled from 'styled-components'
import { useContext } from 'react';
import {GlobalContext} from '../../../../util/GlobalProvider';

const ThirdContent = () => {
    const { globalState } = useContext(GlobalContext);

    return (
        <StyledThirdContent point={globalState.mousePoint}>
            Third-Content
        </StyledThirdContent>
    )
}

export default ThirdContent

const StyledThirdContent = styled.div.attrs(({point}) => ({
    style: {
        top: 240+point.y,
        left: 260+point.x
    }
}))`
    position:absolute;
    width: 400px;
    height:100px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #9bd347;

    ${({theme}) => theme.center};
`;
