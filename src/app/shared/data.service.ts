import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService implements OnInit {


  results: any;

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:

  };

  getService() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbn1OgGei-DV7aSRo_HaAiw&key=AIzaSyA8OHCyYSR7aFsJXsna7TumltQ0v56rUWU&maxResults=10&order=date');
  }
}
