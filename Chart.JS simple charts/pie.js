 // Get the canvas element
 const ctx = document.getElementById('myChart').getContext('2d');
  
 // Define the data for the chart
 const data = {
   labels: ['Red', 'Blue', 'Yellow'],
   datasets: [{
     label: 'My First Dataset',
     data: [300, 50, 100],
     backgroundColor: [
       'rgb(255, 99, 132)',
       'rgb(54, 162, 235)',
       'rgb(255, 205, 86)'
     ]
   }]
 };

 // Create the chart
 const myChart = new Chart(ctx, {
   type: 'pie',
   data: data,
 });

 