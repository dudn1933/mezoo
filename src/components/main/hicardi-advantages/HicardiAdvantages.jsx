import styled from 'styled-components'

const HicardiAdvantages = () => {
    return (
        <StyledHicardiAdvantages>
            하이카디를 사용하면 얻을 수 있는 Advantages
        </StyledHicardiAdvantages>
    )
}

export default HicardiAdvantages


const StyledHicardiAdvantages = styled.div`
    width:100%;
    height:100vh;

    ${({theme}) => theme.center};
`;