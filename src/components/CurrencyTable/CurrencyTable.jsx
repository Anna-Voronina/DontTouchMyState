import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyRatesAsync } from 'redux/currency/currencyOperations';
import { selectCurrencyData } from 'redux/currency/currencySelectors';
import {
  CurrencyChartRates,
  CurrencyTableBody,
  CurrencyTableStyled,
  CurrencyTableWrapper,
  MaxRateBuy,
  MinRateBuy,
} from './CurrencyTable.styled';
import { nanoid } from '@reduxjs/toolkit';
import { CurrencyChart } from 'components/CurrencyChart/CurrencyChart';

const CurrencyTable = () => {
  const dispatch = useDispatch();
  const { rates, loading, error } = useSelector(selectCurrencyData);

  useEffect(() => {
    dispatch(fetchCurrencyRatesAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const getCurrencyRates = () => {
    return rates;
  };

  const filteredRates = getCurrencyRates().filter(rate => {
    return (
      (rate.currencyCodeA === 840 && rate.currencyCodeB !== 978) ||
      (rate.currencyCodeA === 978 && rate.currencyCodeB !== 840)
    );
  });

  const maxRateBuy = Math.max(...filteredRates.map(rate => rate.rateBuy));
  const minRateBuy = Math.min(...filteredRates.map(rate => rate.rateBuy));
  return (
    <>
      <CurrencyTableWrapper>
        <CurrencyTableStyled>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>
          <CurrencyTableBody>
            {filteredRates.map(rate => (
              <tr key={nanoid()}>
                <td>{rate.currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
                <td>{rate.rateBuy.toFixed(2)}</td>
                <td>{rate.rateSell.toFixed(2)}</td>
              </tr>
            ))}
          </CurrencyTableBody>
        </CurrencyTableStyled>
        <CurrencyChartRates>
        <MinRateBuy>{minRateBuy.toFixed(2)}</MinRateBuy>
        <MaxRateBuy>{maxRateBuy.toFixed(2)}</MaxRateBuy>
        </CurrencyChartRates>
        <CurrencyChart />
      </CurrencyTableWrapper>
    </>
  );
};

export default CurrencyTable;
