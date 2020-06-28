import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from '../../shared/data.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit, AfterViewInit {

  length: any = 0;
  displayedColumns = ['symbol', 'title', 'description', 'publishedAt'];
  dataSource: any = new MatTableDataSource();
  results: any;
  pageEvent: PageEvent;
  nextPage: any;
  prevPage: any;
  currPage: any;
  showLoading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDataFromServiceFunc(undefined);
    this.showLoading = true;
  }

  ngAfterViewInit() {
    this.paginator._length = this.length;
    this.currPage = this.paginator._pageIndex;
  }

  getDataFromServiceFunc(pageToken?: string) {
    this.dataService.getService(pageToken).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      this.nextPage = this.results.nextPageToken;
      this.prevPage = this.results.prevPageToken;
      this.dataSource.data = this.results.items;
      this.length = this.results.pageInfo.totalResults;
      this.showLoading = false;
    },
      err => {
        console.log('Something went wrong!');
        this.showLoading = false;
      });
  }

  pageChange($event) {
    if (this.currPage < $event.pageIndex) {
      this.getDataFromServiceFunc(this.nextPage);
    } else {
      this.getDataFromServiceFunc(this.prevPage);
    }
    this.pageEvent = $event;
    this.currPage = $event.pageIndex;
  }

}
