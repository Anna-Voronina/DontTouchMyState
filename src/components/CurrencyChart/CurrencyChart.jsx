import currencyImgDesk from 'assets/images/currency_desk.png';
import currencyImgRetinaDesk from 'assets/images/currency_desk@2x.png';
import currencyImgTablet from 'assets/images/currency_tablet.png';
import currencyImgRetinaTablet from 'assets/images/currency_tablet@2x.png';
import currencyImgMobile from 'assets/images/currency_mobile.png';
import currencyImgRetinaMobile from 'assets/images/currency_mobile@2x.png';
import currencyYellowLineDesktop from 'assets/images/currencyYellowLineDesktop.png';
import currencyYellowLineTablet from 'assets/images/currencyYellowLineTablet.png';
import currencyYellowLineMobile from 'assets/images/currencyYellowLineMobile.png';
import ellipsDekstop from 'assets/images/ellipseDesktop.png';
import ellipsMobile from 'assets/images/ellipseMobile.png';
import {
  CurrencyChartVioletPart,
  CurrencyChartWrapper,
  CurrencyChartYellowLine,
  EllipsLeft,
  EllipsRight,
} from './CurrencyChart.styled';

export const CurrencyChart = () => {
  return (
    <CurrencyChartWrapper>
      <EllipsLeft>
        <source
          media="(min-width: 1280px)"
          srcSet={`${ellipsDekstop} 1x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${ellipsMobile} 1x,`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${ellipsMobile} 1x,`}
          type="image/png"
        />
        <img src={ellipsDekstop} alt="Currency rate" loading="lazy" />
      </EllipsLeft>

      <EllipsRight>
        <source
          media="(min-width: 1280px)"
          srcSet={`${ellipsDekstop} 1x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${ellipsMobile} 1x,`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${ellipsMobile} 1x,`}
          type="image/png"
        />
        <img src={ellipsDekstop} alt="Currency rate" loading="lazy" />
      </EllipsRight>
      <CurrencyChartYellowLine>
        <source
          media="(min-width: 1280px)"
          srcSet={`${currencyYellowLineDesktop} 1x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${currencyYellowLineTablet} 1x,`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${currencyYellowLineMobile} 1x,`}
          type="image/png"
          width="767"
        />
        <img
          src={currencyYellowLineDesktop}
          alt="Currency rate"
          loading="lazy"
        />
      </CurrencyChartYellowLine>
      <CurrencyChartVioletPart>
        <source
          media="(min-width: 1280px)"
          srcSet={`${currencyImgDesk} 1x, ${currencyImgRetinaDesk} 2x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${currencyImgTablet} 1x, ${currencyImgRetinaTablet} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${currencyImgMobile} 1x, ${currencyImgRetinaMobile} 2x`}
          type="image/png"
          width="767"
        />

        <img src={currencyImgDesk} alt="Currency rate" loading="lazy" />
      </CurrencyChartVioletPart>
    </CurrencyChartWrapper>
  );
};
