import styled from 'styled-components'
import Address from './address/Address'
import FooterImage from './footer-image/FooterImage'
import LatestNews from './footer-image/latest-news/LatestNews'
import MailNumber from './mail-number/MailNumber'
import Support from './support/Support'

const Footer = () => {
    const onClickEvent = () => {
        const main = document.querySelector('.main');
        main.scrollTo({top:0, behavior:'smooth'});
    }
    return (
        <StyledFooter className="footer">
            <Support />
            <LatestNews />
            <FooterImage />
            <StyledFooterContent>
                <Address />
                <MailNumber />
                <StyledCompany> Copyright © 2019 MEZOO.Co.Ltd. All rights reseved.</StyledCompany>
                <StyledLogo onClick={onClickEvent}/>
            </StyledFooterContent>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.div`
    width:100%;
    height: 100vh;
    position:relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;

const StyledFooterContent = styled.div`
    z-index: 2;
    position:absolute;
    bottom:0;
    width: 100%;
    height: 30vh;
    background-color: #222222;
    color:white;
    display:grid;
    grid-template-columns: repeat(1,4fr);
    align-items:center;
    text-align: center;
`;

const StyledCompany = styled.div`
    color: #989898;
`;

const StyledLogo = styled.div`
    cursor: pointer;
    background: url('./image/P_logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width:100%;
    height:40px;
`;