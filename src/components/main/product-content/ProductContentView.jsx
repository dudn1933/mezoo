import styled from 'styled-components';

const ProductContentView = () => {

    // console.log("ProductContentView : ", window.pageYOffset);

    return (
        <StyledProductContentView className="productContentView"/>
    )
}

export default ProductContentView

const StyledProductContentView = styled.div`
    flex:none;
    scroll-snap-align: start;
    scroll-snap-stop:always;
    z-index: 2;

    width:100%;
    height:100vh;
    background: url('./image/hospital.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
`;