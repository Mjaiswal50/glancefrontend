import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertserviceService } from '../services/alertservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent{

  constructor(private ass:AlertserviceService) {
    this.ass.Success("Login Successfull");
 }

}
