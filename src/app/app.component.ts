import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getRequest('/app').subscribe(
      (response) => {
        this.title = "Backend connected successfully response is " + response.message;
      },
      (error) => { 
        this.title = "Backend Connection failed ";
      }
    );
  }
}
