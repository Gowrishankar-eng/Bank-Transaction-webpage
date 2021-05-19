import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private myhttp:HttpClient) { }

  getdetails(){
    return this.myhttp.get<any>('http://localhost:3001/custarray')
  }
}
