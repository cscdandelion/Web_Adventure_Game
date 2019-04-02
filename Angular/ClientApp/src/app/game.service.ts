import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {
  private headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:59029/api/game';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  public choose(url: string) {
    return this.http.get(this.accessPointUrl+'/'+ url , { headers: this.headers });
  }
}
