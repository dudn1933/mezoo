import styled from 'styled-components'
import Hicardi from './hicardi/Hicardi'
import Vetwave from './vetwave/Vetwave'

const Main = () => {
    return (
        <StyledMain className="어딧냐">
            <Hicardi />
            <Vetwave />
        </StyledMain>
    )
}

export default Main

const StyledMain = styled.div`
    position:absolute;
    z-index: 1;
    top:100vh;
    background-color:white;
    width:100%;
    height:200vh;
`;
