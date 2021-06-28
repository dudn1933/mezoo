import styled from 'styled-components'
import Hicardi from './hicardi/Hicardi'
// import Vetwave from './vetwave/Vetwave'

const Main = () => {
    return (
        <StyledMain>
            <Hicardi />
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

    scroll-snap-align: start;
`;
