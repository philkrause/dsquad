import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data$: any;
  filteredData$: [];
  maxwellHotsCount$: number;
  greesemonkeyHotsCount$: number;
  mikeryanHotsCount$: number;
  blakeHotsCount$: number;
  HotsCount$: number;
  dates: string[];


  constructor(private data: DataService) {
    console.log('Constructor Loaded');
    this.maxwellHotsCount$ = 0;
    this.greesemonkeyHotsCount$ = 0;
    this.mikeryanHotsCount$ = 0;
    this.blakeHotsCount$ = 0;
    this.HotsCount$ = 0;
    this.dates = [];
    this.filteredData$ = [];
  }

  ngOnInit() {
    this.data.getData(this.data$).subscribe(data => {
        this.data$ = data;
        this.filteredData$ = this.data$.map(m => {
          return {
            sender: m['Sender Name'],
            messageDate: m['Message Date'],
            text: m['Text']
          };
        });
    });
    const countAllHots = () => {
      const allCounts = this.data$.reduce((acc, message) => {
        if (acc[message[`Sender Name`]]) {
          acc[message[`Sender Name`]] ++
        } else {
          acc[message[`Sender Name`]] = 1;
        }
        return acc;
      }, {});
      console.log(allCounts);
    }
  }


  



}

 // countTextWithHots(){
 //    const count = newData((acc, val) => {
 //
 // }
 // })

  // sortName() {
  //   // @ts-ignore
  //   this.data$.sort((a, b) => a['Sender Name'] > b['Sender Name'] ? 1 : -1);
  // }

  // getTotal() {
  //   const total = this.data$.length
  //   console.log(total);
  // }


  // countHots(name: any) {
  //   this.data$.forEach(set => {
  //     if (set[sender].replace(/\s/g, '').toLowerCase() === name) {
  //       this[`${name}HotsCount$`]++;
  //      }
  //     // console.log(this[`${name}HotsCount$`]);
  //   });
  // }


  // this.dates = data.map(m => m['Message Date']
  //   .split(' ')
  //   .splice(0, 1));
  // console.log(this.dates);



