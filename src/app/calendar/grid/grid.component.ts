import { Component, OnInit } from '@angular/core';
import {CalendarService} from 'src/app/services/calendar.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{
  calendarList: Array<any> = []

  constructor(public calendarService:CalendarService) { }

  ngOnInit(): void {
  }


}
