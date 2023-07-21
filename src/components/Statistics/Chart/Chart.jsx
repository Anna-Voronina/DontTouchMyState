import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, HrvnIcon, StyledSpan } from './Chart.styled';
import { useCategoriesType } from 'hook/categoriesFilter';
import { useSelector } from 'react-redux';
import { selectPeriodTotal } from 'redux/transaction/transactionSelectors';

export const Chart = ({ colorStyle, resp }) => {
  const [expenseCategories] = useCategoriesType(resp);
  const periodTotal = useSelector(selectPeriodTotal);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [],
    datasets: [
      {
        data: !expenseCategories.length
          ? [1]
          : expenseCategories.map(item => item.total),
        backgroundColor: colorStyle,
        borderColor: colorStyle,
        boxShadow: ['0px 4px 60px 0px rgba(0, 0, 0, 0.25)'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: '75%',
  };

  return (
    <ChartWrapper>
      <StyledSpan>
        <HrvnIcon />
        {Number(periodTotal).toFixed(2)}
      </StyledSpan>
      <Doughnut data={data} options={options} />
    </ChartWrapper>
  );
};
