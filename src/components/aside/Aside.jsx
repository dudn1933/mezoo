import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi'

const Aside = () => {
    return (
        <StyledAside>
            <Logo>
                <CompanyLogo />
            </Logo>
            <GiHamburgerMenu />
        </StyledAside>
    )
}

export default Aside

const Logo = styled.div`
    cursor:pointer;
    width:120px;
    height:40px;
    background-color: transparent;
`;

const CompanyLogo = styled.div`
    background: url('./image/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    width:100%;
    height:40px;
`;

const StyledAside = styled.div`
    position:fixed;
    box-sizing: border-box;
    width:100%;
    display:flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.black1};
    padding: 3%;

    > svg {
        cursor: pointer;
        color: white;
        font-size: 30px;
    }
`;
