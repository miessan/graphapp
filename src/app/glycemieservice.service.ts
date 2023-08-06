import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlycemieserviceService {

  url:string="https://glycemieapi-production.up.railway.app/taux";
  constructor(private httpClient: HttpClient) { }

  result(days:Number):Observable<any> {
    console.log(this.url+days);

    return this.httpClient.get(this.url)
  }
}
