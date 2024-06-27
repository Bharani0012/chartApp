import html2canvas from 'html2canvas';
import React from 'react';
import { Bar, BarChart, Brush, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import "../styles/Chart.css";

const Chart = ({ data, chartType, onClick }) => {
  const exportChart = () => {
    const chartNode = document.querySelector('.recharts-wrapper');
    html2canvas(chartNode, {
      backgroundColor: null, // Transparent background
      logging: false, // Disable console logging
      width: chartNode.scrollWidth,
      height: chartNode.scrollHeight
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'chart.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <>
      <button onClick={exportChart} type='button' className='export-button'>
        Export As <span>PNG</span>
      </button>
      <div className='chart-container'>
        {chartType === 'line' && (
          <LineChart
            width={window.innerWidth * 0.9}
            height={window.innerHeight * 0.7}
            data={data}
            onClick={onClick}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 16 }} />
            <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
          </LineChart>
        )}
        {chartType === 'bar' && (
          <BarChart
            width={window.innerWidth * 0.9}
            height={window.innerHeight * 0.7}
            data={data}
            onClick={onClick}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
            <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
          </BarChart>
        )}
        {chartType === 'pie' && (
          <PieChart
            width={window.innerWidth * 0.9}
            height={400}
            onClick={onClick}
          >
            <Pie
              data={data}
              dataKey="value"
              nameKey="timestamp"
              cx="50%"
              cy="50%"
              outerRadius={Math.min(window.innerWidth, window.innerHeight) * 0.3}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </div>
    </>
  );
};

export default Chart;
