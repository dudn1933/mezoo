import styled from 'styled-components'

const HicardiUse = () => {
    return (
        <StyledHicardiUse className="use">
            하이카디를 사용하는 방법의 이미지들 추가.
        </StyledHicardiUse>
    )
}

export default HicardiUse


const StyledHicardiUse = styled.div`
    position:relative;
    z-index: 2;
    scroll-snap-align:start;
    scroll-snap-stop: always;
    width:100%;
    height:100vh;
    background: url('./image/example-image.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${({theme}) => theme.center};
`;