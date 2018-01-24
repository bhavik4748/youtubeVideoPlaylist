import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService implements OnInit {


  part: string;
  channelId: string;
  key: string;
  maxResults: number;
  order: string;
  url: string;
  serviceApi: string;
  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:

  };

  getService(pageToken?: string) {

    this.url = "https://www.googleapis.com/youtube/v3/search";
    this.part = "snippet";
    this.channelId = "UCbn1OgGei-DV7aSRo_HaAiw";
    this.key = "AIzaSyA8OHCyYSR7aFsJXsna7TumltQ0v56rUWU";
    this.maxResults = 10;
    this.order = "date";
    this.serviceApi = this.url + "?part=" + this.part + "&channelId=" + this.channelId + "&key=" + this.key + "&maxResults=" + this.maxResults + "&order=" + this.order + (pageToken != undefined ? "&pageToken=" + pageToken : '');
    return this.http.get(this.serviceApi);
  }
}
