import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Preview} from '../interface/preview.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  calendario: any;

  constructor(private http: HttpClient) {
    this.cargarCalendar();

   }
   private cargarCalendar(){
     return new Promise((resolve, reject)=>{
         this.http.get('https://calendar-d72b0-default-rtdb.firebaseio.com/preview.json')
         .subscribe(resp=>{
          this.calendario = resp;
           //resolve();
         });
     });
   }
  }