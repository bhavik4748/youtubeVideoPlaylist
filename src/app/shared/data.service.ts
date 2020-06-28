import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

    this.url = environment.url;
    this.part = `snippet`;
    this.channelId = environment.channelId;
    this.key = environment.key;
    this.maxResults = 10;
    this.order = `date`;
    this.serviceApi = this.url + `?part=` + this.part + `&channelId=` + this.channelId + `&key=` + this.key + `&maxResults=` + this.maxResults + `&order=` + this.order + (pageToken != undefined ? `&pageToken=` + pageToken : ``);
    return this.http.get(this.serviceApi);
  }
}
