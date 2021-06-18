import styled from 'styled-components'
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider'

const FirstContent = () => {
    const { globalState } = useContext(GlobalContext);

    return (
        <StyledFirstContent point={globalState.mousePoint}>
            First-Content
        </StyledFirstContent>
    )
}

export default FirstContent

const StyledFirstContent = styled.div.attrs(({point}) => ({
    style: {
        top: -200+point.y,
        left: 220+point.x
    }
}))`
    position:absolute;
    width: 400px;
    height:100px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #f28e06;

    ${({theme}) => theme.center};
`;
