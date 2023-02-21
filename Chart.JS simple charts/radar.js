// Define the data for the chart
const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }, {
      label: 'Expenses',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };
  
  // Define the options for the chart
  const options2 = {
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };
  
  // Create the chart object
  const ctx2 = document.getElementById('radarChart').getContext('2d');
  const chart = new Chart(ctx2, {
    type: 'radar',
    data: data2,
    options: options2
  });
  