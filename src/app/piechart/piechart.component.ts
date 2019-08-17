import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import * as Chart from 'chart.js'
import {DataService} from '../dataservice.service';





@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements AfterViewInit {

  weatherDates: string[];
  chart: any;

  constructor() {
    this.weatherDates = ['Jan', 'Feb', 'March'];
    this.chart = [];
  }



  @ViewChild('myCanvas', {static: false})
  myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;



  gettest(): void {
        this.context = (<HTMLCanvasElement> this.myCanvas.nativeElement).getContext('2d');
        this.chart = new Chart(this.context, {
          type: 'line',
          data: {
            labels: this.weatherDates,
            datasets: [
              {
                data: [100],
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: [50],
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });


  }
  ngAfterViewInit() {
    this.gettest();
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
