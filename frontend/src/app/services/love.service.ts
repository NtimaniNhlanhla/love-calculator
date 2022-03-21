import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Names } from '../models/Names';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoveService {

  private apiUrl = `${environment.api_url}love`
  constructor(private http:HttpClient) { }

  calcLove(names: Names): Observable<any> {
    return this.http.post<Names>(this.apiUrl, names);
  }
}
