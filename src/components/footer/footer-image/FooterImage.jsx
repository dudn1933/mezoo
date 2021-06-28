import styled from "styled-components"

const FooterImage = () => {
    return (
        <StyledFooterImage />
    )
}

export default FooterImage

const StyledFooterImage = styled.div`
    z-index:1;
    position:absolute;
    width:100%;
    height:70vh;
    background: url('./image/footer-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;