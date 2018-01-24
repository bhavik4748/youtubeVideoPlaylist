import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from '../../shared/data.service';
import { FormsModule } from '@angular/forms';

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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getService().subscribe(data => {
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

  ngAfterViewInit() {
    this.paginator._length = this.length;
  }
  

}