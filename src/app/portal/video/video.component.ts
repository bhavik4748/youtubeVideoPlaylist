import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from '../../shared/data.service';

import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

  length: any = 0;
  displayedColumns = ['symbol', 'title', 'description', 'publishedAt'];
  dataSource: any = new MatTableDataSource();
  results: any;
  pageEvent: PageEvent;
  nextPage: any;
  prevPage: any;
  currPage: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDataFromServiceFunc(undefined);
  }

  ngAfterViewInit() {
    this.paginator._length = this.length;
    this.currPage = this.paginator._pageIndex;
    // console.log(' this.currPage =>' + this.currPage);
  }

  getDataFromServiceFunc(pageToken?: string) {
    this.dataService.getService(pageToken).subscribe(data => {
      // Read the result field from the JSON response.      
      this.results = data;
      this.nextPage = this.results.nextPageToken;
      this.prevPage = this.results.prevPageToken;
      this.dataSource.data = this.results.items;
      this.length = this.results.pageInfo.totalResults;
    },
      err => {
        console.log('Something went wrong!');
      });
  }

  pageChange($event) {
    if (this.currPage < $event.pageIndex)
      this.getDataFromServiceFunc(this.nextPage);
    else
      this.getDataFromServiceFunc(this.prevPage);

    this.pageEvent = $event;
    this.currPage = $event.pageIndex;
  }

}