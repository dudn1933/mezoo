import styled from 'styled-components';

const HicardiDesc = ({index}) => {
    return (
        <StyledHicardiDesc index={index} />
    )
}

export default HicardiDesc

const StyledHicardiDesc = styled.div`
    width:100%;
    height:100vh;
    background: ${({index}) => `url(./image/hicardi-content/${index}.jpg)`} ;
    background-repeat: no-repeat;
    background-size: ${({index}) => index===1 ? `contain` : `cover`};
    background-position-x:50%;
`;