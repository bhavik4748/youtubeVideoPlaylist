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

  length: any = 100;
  displayedColumns = ['symbol', 'title', 'description', 'publishedAt'];
  dataSource: any = new MatTableDataSource();
  results: any;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getService().subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      this.dataSource.data = this.results.items;
      this.length = 100;
      setTimeout(function () { this.length = 100; }, 100);
    },
      err => {
        console.log('Something went wrong!');
      });;
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


