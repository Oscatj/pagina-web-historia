import { Component, OnInit } from '@angular/core';
import {CalendarService} from 'src/app/services/calendar.service';
@Component({
  selector: 'app-altagracia',
  templateUrl: './altagracia.component.html',
  styleUrls: ['./altagracia.component.css']
})
export class AltagraciaComponent implements OnInit {

  constructor(public calendarService:CalendarService) { }

  ngOnInit(): void {
  }

}
