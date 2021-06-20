import styled from "styled-components";
import EcgChart from "./ecg-chart/EcgChart";
import Products from "./products/Products";

const Header = () => {
  return (
    <StyledHeader id="header">
      <EcgChart />
      <Products />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  z-index: -1;
  ${({ theme }) => theme.center}
  scroll-snap-align:start;
  scroll-snap-stop: always;
  background: url("./image/background-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
`;
