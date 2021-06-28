import styled from "styled-components";
import EcgChart from "./ecg-chart/EcgChart";
import Products from "./products/Products";

const Header = () => {
  return (
    <StyledHeader id="header">
      <StyledHeaderColor>
        <EcgChart />
        <Products />
      </StyledHeaderColor>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  ${({ theme }) => theme.center}
  scroll-snap-align:start;
  scroll-snap-stop: always;
  background: url("./image/background-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
`;

const StyledHeaderColor = styled.div`
  ${({theme}) => theme.center}
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0, 0.3);
`;