import {Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {DataService} from '../dataservice.service';





@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  title: 'yo momma';
  LineChart: any;
  BarChart: any;
  PieChart: any;

  ngOnInit() {


// pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Blink', 'Greese Monkey', 'Mtry1', 'PhilsOdyssey', 'Mr. Sparkle'],
        datasets: [{
          label: '# of Votes',
          data: [1103, 1620 , 1436, 678 , 2153],
          backgroundColor: [
            'rgb(255,0,8, .5)',
            'rgb(0,235,23, .5)',
            'rgb(255,235,6, .5)',
            'rgb(255,113,0, .5)',
            'rgb(0,101,255, .5)',
          ],
          borderColor: [
            'rgb(255,0,8)',
            'rgb(0,235,23)',
            'rgb(255,235,6)',
            'rgb(255,113,0)',
            'rgb(0,101,255)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text: 'Bar Chart',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
// Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of Items Sold in Months',
          data: [9, 7 , 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: false,
          lineTension: 0.2,
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Line Chart',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

// Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Bar Chart',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }
}






  // ctx = 'myChart';

//   ngOnInit() {
//     const chart = new Chart(this.ctx, {
//       type: 'line',
//       data: {
//         labels: ['Jan', 'Feb', 'March'],
//         datasets: [
//           {
//             data: [100],
//             borderColor: '#3cba9f',
//             fill: false
//           },
//           {
//             data: [10],
//             borderColor: '#ffcc00',
//             fill: false
//           },
//         ]
//       },
//       options: {
//         legend: {
//           display: false
//         },
//         scales: {
//           xAxes: [{
//             display: true
//           }],
//           yAxes: [{
//             display: true
//           }]
//         }
//       }
//
//
//     });
//   }
// }
