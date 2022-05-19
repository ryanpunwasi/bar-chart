const drawBarChart = (data, options, element) => {

  const { title, titleSize, titleColor, barColor, xAxisTitle, xAxisLabelColor, xAxisLabels, yAxisTicks, yAxisTitle,  barSpacing, barLabelColor, barLabelPosition } = options;

  const renderBars = data => {
    let bars = '';
    for(let bar in data) {
      bars += "<div class='bar' style='height: 30px'></div>";
    }

    return `<div class='bars-container'>${bars}</div>`
  }

  const renderTitle = (title, color = 'black', size = '2em') => {
    return `<p class="title" style="color: ${color}; font-size: ${size}">${toTitleCase(title)}</p>`;
  };

  const renderXAxis = (xAxisLabels, xAxisLabelColor, barSpacing) => {
    let labels = '';
    for(let label in xAxisLabels) {
      labels += `<div class='x-axis-label'>${xAxisLabels[label]}</div>`;
    }

    return `<div class='x-axis'><div class='label-container'>${labels}</div></div>`;
  }

  const renderYAxis = ticks => {
    return `<div class='y-axis'></div>`;
  }

  const renderXAxisTitle = title => {
    return `<div class="x-axis-subtitle">${title}<div/>`;
  }

  const renderYAxisTitle = title => {
    return `<div class="y-axis-subtitle">${title}<div/>`;
  }

  // Render calls

  $(element).append(renderTitle(title, titleColor, titleSize));
  $(element).append(renderYAxis(yAxisTicks));
  $(element).append(renderXAxis(xAxisLabels, xAxisLabelColor, barSpacing));
  $(element).append(renderXAxisTitle(xAxisTitle));
  $(element).append(renderYAxisTitle(yAxisTitle));
  $(element).append(renderBars(data));


}

// Helper functions

const toTitleCase = text => {
  const words = text.trim().split(" ");
  let title = '';
  for(let i = 0; i < words.length; i++) {
    title += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  }
  return title.trimEnd();
}

// Testing

const data = [1, 2, 3];

const options = {
  title: "NBA Three-Point Attempts By Year",
  titleColor: "maroon",
  titleSize: "3em",
  xAxisTitle: "Year",
  xAxisLabels: [ 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021 ],
  yAxisTitle: "Average Number of Three-Point Attempts Per Game",
  data
};

const element = document.getElementById('chart');

$( document ).ready(function() {
  drawBarChart(data, options, element);
});
