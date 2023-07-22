import styled from 'styled-components';

export const CurrencyTableWrapper = styled.div`
  border-radius: 0px;
  max-height: 214px;
  @media (min-width: 768px) {
    width: 336px;
    border-radius: 0px 0px 8px 8px;
    height: 214px;
  }
  @media (min-width: 1280px) {
    height: 380px;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const CurrencyTableStyled = styled.table`
  border-spacing: 0;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  thead {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: rgba(255, 255, 255, 0.2);
    height: 50px;
    width: 100%;
    @media (min-width: 768px) {
      height: 48px;
    }
    @media (min-width: 1280px) {
      min-height: 56px;
    }

    th:first-child {
      padding-left: 20px;
      text-align: start;
      @media (min-width: 1280px) {
        padding-left: 62px;
        padding-right: 20px;
      }
    }

    th:last-child {
      padding-right: 20px;
      padding-left: 0px;
      text-align: end;
      @media (min-width: 1280px) {
        padding-right: 131px;
      }
    }

    th {
      text-align: start;
    }

    td {
      text-align: center;
    }
  }
`;

export const CurrencyTableBody = styled.tbody`
  td {
    padding-top: 24px;
    @media (min-width: 768px) {
      padding-top: 11px;
    }
  }

  td:first-child {
    padding-left: 30px;
    @media (min-width: 768px) {
      padding-left: 20px;
    }
    @media (min-width: 1280px) {
      padding-left: 84px;
    }
  }

  td:last-child {
    padding-right: 20px;
    text-align: end;
    @media (min-width: 1280px) {
      padding-right: 131px;
    }
  }
`;

export const CurrencyChartRates = styled.div`
  display: none;
  @media (min-width: 1280px) {
    height: 6px;
    display: block;
    font-size: 12px;
    color: #ff868d;
  }
`;
export const MinRateBuy = styled.p`
  margin-left: 50px;
  transform: translateY(40px);
  font-size: 12px;
  color: #ff868d;
`;

export const MaxRateBuy = styled.p`
  margin-left: 355px;
  transform: translateY(-9px);
  font-size: 12px;
  color: #ff868d;
`;
