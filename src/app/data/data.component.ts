import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice.service';
import {Data} from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data$: string[];
  maxwellHotsCount$: number;
  greesemonkeyHotsCount$: number;
  mikeryanHotsCount$: number;
  blakeHotsCount$: number;
  HotsCount$: number;

  constructor(private data: DataService) {
    console.log('Constructor Loaded');
    this.maxwellHotsCount$ = 0;
    this.greesemonkeyHotsCount$ = 0;
    this.mikeryanHotsCount$ = 0;
    this.blakeHotsCount$ = 0;
    this.HotsCount$ = 0;

  }

  ngOnInit() {
    this.data.getData(this.data$) .subscribe(data => this.data$ = data as any);
    console.log('Onit Loaded');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck() {
    console.log('ngDoCheck loaded');
    this.getTotal();

  }

  sortName() {
    // @ts-ignore
    this.data$.sort((a, b) => a['Sender Name'] > b['Sender Name'] ? 1 : -1);
  }

  getTotal() {
    const total = this.data$.length
    console.log(total);
  }


  countHots(name: any) {
    this.data$.forEach(set => {
      if (set['Sender Name'].replace(/\s/g, '').toLowerCase() === name) {
        this[`${name}HotsCount$`]++;
       }
      // console.log(this[`${name}HotsCount$`]);
    });
  }


    countAllHots() {
      const allCounts = this.data$.reduce((acc, message) => {
        if (acc[message['Sender Name']]) {
          acc[message['Sender Name']]++;
        } else {
          acc[message['Sender Name']] = 1;
        }
        return acc;
      }, {});
      console.log(allCounts);
    }

}
