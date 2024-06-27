# Chart Visualization with Recharts

This project is a React-based application that allows users to visualize data using different chart types (Line, Bar) with Recharts. Users can also export charts as PNG images.

## Features

- **Line, Bar, and Pie Charts**: Visualize your data in different formats.
- **Timeframe Selection**: Filter data by daily, weekly, or monthly averages.
- **Chart Export**: Export your chart as a PNG image.
- **Responsive Design**: Ensures the charts and UI are responsive and look good on various devices.

## Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/chart-visualization.git
    cd chart-visualization
    ```

2. **Install Dependencies**:
    npm install

3. **Start the Development Server**:
    ```sh
    npm start
    ```

## Project Structure

- `src/`
  - `components/`
    - `Chart.js`: Component for rendering the charts.
    - `TimeframeSelector.js`: Component for selecting the timeframe for data filtering.
  - `data/`
    - `data.json`: Sample data file.
  - `styles/`
    - `App.css`: Styles for the App component.
    - `Chart.css`: Styles for the Chart component.
  - `App.js`: Main App component.
  - `index.js`: Entry point of the React application.

## Usage

1. **Run the Application**:
    npm start

2. **Open the Application**:
   - Open your browser and navigate to `https://main--reliable-eclair-13a28c.netlify.app/`.

3. **Select Timeframe**:
   - Use the timeframe selector to filter data by daily, weekly, or monthly averages.

4. **Change Chart Type**:
   - Use the buttons to switch between Line, Bar, and Pie charts.

5. **Export Chart**:
   - Click the "Export As PNG" button to download the chart as a PNG image.

## Sample Data Format

The data should be in JSON format with the following structure:
```json
[
  {
    "timestamp": "2023-01-01T00:00:00Z",
    "value": 100
  },
  {
    "timestamp": "2023-01-02T00:00:00Z",
    "value": 150
  }
]

Customization

    Chart Data: Replace data.json with your own data file.
    Styles: Modify App.css and Chart.css to customize the look and feel.

