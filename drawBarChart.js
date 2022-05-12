const drawBarChart = (data, options, element) => {

  const renderBars = data => {

  }

  const renderTitle = (title, color, size) => {

  }

  const renderXAxis = () => {

  }

  const renderYAxis = () => {

  }

  const renderXAxisTitle = title => {

  }

  const renderYAxisTitle = title => {

  }

  // Render calls

  $(element).append(renderTitle(options['title']));

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

const data = [1, 2, 3];
const options = { title: "Chart Title" };
const element = document.getElementById('chart');

$( document ).ready(function() {
  drawBarChart(data, options, element);
});
