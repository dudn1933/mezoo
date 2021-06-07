import styled from 'styled-components'
import EcgChart from './ecg-chart/EcgChart';

const Header = () => {
    return (
        <StyledHeader>
            <EcgChart />
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.colors.black1};
    height:100vh;
`;