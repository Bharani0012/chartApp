import { useEffect, useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import data from './data/data.json';
import './styles/App.css';

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');
  const [chartType, setChartType] = useState('line');

  useEffect(() => {
    console.log('Setting initial chart data');
    setChartData(data);
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      console.log('Chart data set, filtering data');
      filterData(timeframe);
    }// eslint-disable-next-line
  }, [chartData, timeframe]);

  const handleTimeframeChange = (newTimeframe) => {
    console.log('Timeframe change requested:', newTimeframe);
    setTimeframe(newTimeframe);
  };

  const handleChartTypeChange = (newChartType) => {
    console.log('Chart type change requested:', newChartType);
    setChartType(newChartType);
  };

  const filterData = (selectedTimeframe) => {
    console.log('Filtering data for timeframe:', selectedTimeframe);
    let filteredData = [];

    switch (selectedTimeframe) {
      case 'daily':
        filteredData = chartData;
        break;
      case 'weekly':
        filteredData = calculateWeeklyAverages(chartData);
        break;
      case 'monthly':
        filteredData = calculateMonthlyAverages(chartData);
        break;
      default:
        break;
    }

    console.log('Filtered data:', filteredData);
    setFilteredData(filteredData);
  };

  const calculateWeeklyAverages = (data) => {
    const weeklyData = [];
    let currentWeek = null;
    let sum = 0;
    let count = 0;
    let weekStartDate = null;

    data.forEach((point) => {
      const week = getWeekFromDate(point.timestamp);

      if (week !== currentWeek) {
        if (currentWeek !== null) {
          weeklyData.push({
            timestamp: weekStartDate,
            value: sum / count,
          });
        }
        currentWeek = week;
        weekStartDate = point.timestamp;
        sum = 0;
        count = 0;
      }

      sum += point.value;
      count++;
    });

    if (currentWeek !== null) {
      weeklyData.push({
        timestamp: weekStartDate,
        value: sum / count,
      });
    }

    return weeklyData;
  };

  const calculateMonthlyAverages = (data) => {
    const monthlyData = [];
    let currentMonth = null;
    let sum = 0;
    let count = 0;

    data.forEach((point) => {
      const month = getMonthFromDate(point.timestamp);

      if (month !== currentMonth) {
        if (currentMonth !== null) {
          monthlyData.push({
            timestamp: currentMonth,
            value: sum / count,
          });
        }
        currentMonth = month;
        sum = 0;
        count = 0;
      }

      sum += point.value;
      count++;
    });

    if (currentMonth !== null) {
      monthlyData.push({
        timestamp: currentMonth,
        value: sum / count,
      });
    }

    return monthlyData;
  };

  const handleChartClick = (data) => {
    if (data && data.activeLabel) {
      const point = data.activePayload[0].payload;
      alert(`Timestamp: ${point.timestamp}\nValue: ${point.value}`);
    }
  };

  const getWeekFromDate = (dateString) => {
    const date = new Date(dateString);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const getMonthFromDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    return month;
  };

  return (
    <div className="App">
      <h1 className="app-head">Transform Your Data Into Stunning Charts with <span>Recharts</span></h1>
      <TimeframeSelector onSelect={handleTimeframeChange} />
      <div className="chart-type-container">
        <button
          onClick={() => handleChartTypeChange('line')}
          className={`chart-type-button ${chartType === 'line' ? 'active' : ''}`}
        >
          Line Chart
        </button>
        <button
          onClick={() => handleChartTypeChange('pie')}
          className={`chart-type-button ${chartType === 'pie' ? 'active' : ''}`}
        >
          Pie Chart
        </button>
        <button
          onClick={() => handleChartTypeChange('bar')}
          className={`chart-type-button ${chartType === 'bar' ? 'active' : ''}`}
        >
          Bar Chart
        </button>
      </div>
      <Chart data={filteredData} chartType={chartType} onClick={handleChartClick} />
    </div>
  );
};

export default App;
