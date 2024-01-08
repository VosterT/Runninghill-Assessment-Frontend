import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWords } from './words';
import { Observable } from 'rxjs';
import { ISentence } from './sentence';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private sentenceUrl: string = "http://localhost:8080/runninghill/sentence/Test";
  private optionsUrl: string = "http://localhost:8080/runninghill/options/Test";
  private responseUrl: string = "http://localhost:8080/runninghill/answers";

  constructor(private http: HttpClient) { }

  getOptions(): Observable<IWords[]>{

    return this.http.get<IWords[]>(this.optionsUrl);
  }
  
  getSetence(): Observable<ISentence[]>{

    return this.http.get<ISentence[]>(this.sentenceUrl);
  }

  
  sendResponse(data:any){

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          'key': 'x-api-key',
          'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',

      })
    };
    return this.http.post(this.responseUrl, data, httpOptions);

  }
}
