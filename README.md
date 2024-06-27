#Chart Visualization App

This repository contains a React application for visualizing data using various chart types.

#Features

    Line Chart
    Bar Chart
    Export charts as PNG

#Installation

To run this project locally, follow these steps:

    Clone the repository: git clone https://github.com/Bharani0012/chartApp.git

    Navigate into the project directory: cd chartApp

Install dependencies: npm install

Start the development server: npm start

Open http://localhost:3000 to view it in the browser.

Usage

    Select a timeframe to view data in different intervals: daily, weekly, monthly.
    Switch between chart types (Line, Bar) to visualize data differently.
    Click on the export button to save the current chart as a PNG file.

Technologies Used

    React.js
    Recharts
    HTML/CSS
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


#Customization

    Chart Data: Replace data.json with your own data file.
    Styles: Modify App.css and Chart.css to customize the look and feel.
