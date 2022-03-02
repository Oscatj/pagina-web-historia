import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CalendarService} from 'src/app/services/calendar.service';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit  {

  constructor(private route:ActivatedRoute, public calendarService:CalendarService ) { }

  ngOnInit(): void {
  }

}
