import styled from 'styled-components';

const HicardiDesc = ({index}) => {
    return (
        <StyledHicardiDesc className={`hicardiDesc${index}`} index={index} />
    )
}

export default HicardiDesc

const StyledHicardiDesc = styled.div`
    width:100%;
    height:100vh;
    background: ${({index}) => `url(./image/hicardi-content/${index+1}.jpg)`} ;
    background-repeat: no-repeat;
    background-size: ${({index}) => index+1===1 ? `contain` : `cover`};
    background-position-x:50%;

    scroll-snap-align: start;
    scroll-snap-stop: always;
`;