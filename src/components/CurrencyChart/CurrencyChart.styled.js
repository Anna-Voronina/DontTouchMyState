import styled from 'styled-components';

export const CurrencyChartWrapper = styled.div`
  width: 100%;
  max-width: 767px;
  height: 97px;
  @media (min-width: 768px) {
    max-height: 98px;
  }
`;

export const CurrencyChartYellowLine = styled.picture`
  width: 100%;
  display: block;
`;

export const CurrencyChartVioletPart = styled.picture`
  transform: translateY(-91px);
  display: block;
  max-height: 88px;
  @media (min-width: 768px) {
    transform: translateY(-65px);
  }
  @media (min-width: 1280px) {
    transform: translateY(-85px);
  }
`;

export const EllipsLeft = styled.picture`
  display: block;
  margin-left: 85px;
  transform: translateY(61px);
  @media (min-width: 768px) {
    margin-left: 41px;
    transform: translateY(33px);
  }
  @media (min-width: 1280px) {
    margin-left: 58px;
    transform: translateY(49px);
  }
`;

export const EllipsRight = styled.picture`
  display: block;
  margin-left: 512px;
  transform: translateY(6px);
  @media (min-width: 768px) {
    margin-left: 255px;
    transform: translateY(5px);
  }
  @media (min-width: 1280px) {
    margin-left: 363px;
    transform: translateY(6px);
  }
`;
