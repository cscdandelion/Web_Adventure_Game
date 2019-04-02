import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LogInfo } from './loginfo';
import { SavingData } from './savingData';

@Injectable()
export class UserService {
  private headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:59029/api/user';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  public login(loginfo: LogInfo) {
    return this.http.post(this.accessPointUrl + '/1', loginfo, { headers: this.headers });
  }
  public register(loginfo: LogInfo) {
    return this.http.post(this.accessPointUrl + '/2', loginfo, { headers: this.headers });
  }

  public save(progress: SavingData) {
    return this.http.put(this.accessPointUrl , progress, { headers: this.headers });
  }

  public updatepoints(points: number) {
    return this.http.put(this.accessPointUrl + '/Points/' + points, { headers: this.headers });
  }
  public getrank() {
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }


}
