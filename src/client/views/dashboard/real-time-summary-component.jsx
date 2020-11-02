import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Late Arrival',
    'Early Leave',
    'Missing',
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }],
};

const RealTimeSummaryComponent = () => (
  <Pie data={data} />
);
export default RealTimeSummaryComponent;
