import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getDashboard } from '../../services/dashboard-service';

const GeneralSummaryComponent = () => {
  const [data, setData] = useState({});
  const getDashboardHandler = async () => {
    const result = await getDashboard('week');
    const titles = result.getDashboard.map((item) => `Week ${item.value}`);
    const values = result.getDashboard.map((item) => item.lateArrival);
    setData({
      labels: titles,
      datasets: [
        {
          label: 'Late Arrival',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#FF6384',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#FF6384',
          pointBackgroundColor: '#FF6384',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#FF6384',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values,
        },
        {
          label: 'Early Leave',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#36A2EB',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#36A2EB',
          pointBackgroundColor: '#36A2EB',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#36A2EB',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [51, 65, 40, 49, 60, 37, 40, 40],
        },
        {
          label: 'Missing',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#FFCE56',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#FFCE56',
          pointBackgroundColor: '#FFCE56',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#FFCE56',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 6, 4, 9, 6, 7, 4, 4],
        },
      ],
    });
  };
  useEffect(() => {
    getDashboardHandler();
  }, []);
  return (
    <Line data={data} />
  );
};
export default GeneralSummaryComponent;
