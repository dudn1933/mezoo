import styled from 'styled-components';
import { Link } from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi'

const Aside = () => {
    return (
        <StyledAside>
            <Logo to='header' spy={true} smooth={true}>
                <CompanyLogo />
            </Logo>
            <GiHamburgerMenu />
        </StyledAside>
    )
}

export default Aside

const Logo = styled(Link)`
    cursor:pointer;
    width:120px;
    height:40px;
    background-color: transparent;
`;

const CompanyLogo = styled.div`
    background: url('./image/P_logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    width:100%;
    height:40px;
`;

const StyledAside = styled.div`
    z-index:200;
    position:fixed;
    box-sizing: border-box;
    width:100%;
    display:flex;
    justify-content: space-between;
    background-color: transparent;
    padding: 3%;

    > svg {
        cursor: pointer;
        color: white;
        font-size: 30px;
    }
`;
