import styled from 'styled-components';
import { useContext } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {GlobalContext} from '../util/GlobalProvider'

const Aside = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const onClick = () => {

    }
    return (
        <StyledAside>
            <Logo onClick={onClick}>
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
        color: black;
        font-size: 30px;
    }
`;
