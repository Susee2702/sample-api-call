import { Component, OnInit, VERSION } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  apiData = [];

  ngOnInit() {
    this._httpService.getUsersList().subscribe((response) => {
      this.apiData = response.products;
      console.log('res', this.apiData);
    });
  }
}
