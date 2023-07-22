import { useMediaQuery } from 'react-responsive';
import { Navigation } from 'components/Navigation/Navigation';
import { NavigationTablet, StyledAside } from './AsideBar.styled';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';

export const AsideBar = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <StyledAside>
      <NavigationTablet>
      <Navigation />
      {isTablet && <Balance />}
      </NavigationTablet>
      {isTablet && <Currency />}
    </StyledAside>
  );
};
