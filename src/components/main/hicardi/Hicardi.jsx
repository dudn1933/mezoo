import styled from 'styled-components'

const Hicardi = () => {
    return (
        <StyledHicardi id="Hicardi">
        </StyledHicardi>
    )
}

export default Hicardi

const StyledHicardi = styled.div`
    z-index: 100;
    width:100%;
    height:100vh;
    background: url('./image/hicardiContent.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 50%;

    scroll-snap-align: start;
`;