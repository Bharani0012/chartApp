import { useState } from 'react';
import "../styles/TimeframeSelector.css";

const TimeframeSelector = ({ onSelect }) => {
  const [timeFrame, setTimeFrame] = useState('daily');

  const onClickTimeFrameButton = (value) => {
    setTimeFrame(value);
    console.log(value);
    onSelect(value);
  }

  return (
    <div className="time-frame-container">
      <button
        onClick={() => onClickTimeFrameButton("daily")}
        className={`chart-type-button ${timeFrame === 'daily' ? 'active' : ''}`}
        type="button"
      >
        Daily
      </button>
      <button
        onClick={() => onClickTimeFrameButton("weekly")}
        className={`chart-type-button ${timeFrame === 'weekly' ? 'active' : ''}`}
        type="button"
      >
        Weekly
      </button>
      <button
        onClick={() => onClickTimeFrameButton("monthly")}
        className={`chart-type-button ${timeFrame === 'monthly' ? 'active' : ''}`}
        type="button"
      >
        Monthly
      </button>
    </div>
  );
};

export default TimeframeSelector;
