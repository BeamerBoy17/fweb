var myChart = document.getElementById('myChart').getContext('2d');

var Chart = new Chart(myChart, {  
   
    type: 'doughnut',
    data: {
        labels:[ 'Еда', 'Квартира', 'Здоровье'],
        datasets: [{ 
          
          radius:100,
          cutout:130,
          data:  [ 50, 25, 25 ], 
                
          backgroundColor: [
              'rgba(69,90,198,0.2)',
              'rgba(62,241,210, 0.2)',
              'rgba(255,84,151, 0.2)',
          ], 
          backgroundColor: [
              'rgb(69,90,198)',
              'rgb(255,160,93)',
              'rgb(255,84,151)',
          ],
          hoverOffset: 4,
          borderWidth:0, 
          fill: false,
    
     
        }]
    },
    options: {
      
      responsive: true,
      plugins: {

        legend: {
          display: true,
          position: 'right',
          fontColor:'#FFFFFF',

        labels: {
          color:'white',
          usePointStyle: true,
          fontColor:'##FFFFFF'
        },
        },  
      }
    },
  });
  var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      legend: {
        display: false
      }
    }
  });
  
 
