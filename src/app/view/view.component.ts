import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  name: string = '';
  obj;
  realseDate: any;
  arr = [];
  constructor(private http: HttpClient, private toasterService: ToasterService) {}

  ngOnInit() {
    this.realseDate = false;
   }

    movies() {
      this.arr = [];
      // tslint:disable-next-line:max-line-length
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=6a73b9189fa826bcf76633d1eab12885&language=en-US&query=%7B%22' + this.name + '%22%7D&page=1&include_adult=false';
      const obs = this.http.get(url);
      obs.subscribe((response: any) => {
        console.log(response);
        if (response.results && response.results.length > 0) {
          this.obj = response;
           this.arr = this.obj.results;
           this.realseDate = true;
        } else {
          this.popToast();
        }
      });
    }

    person()  {
     this.arr = [];
      // tslint:disable-next-line:max-line-length
      const url = 'https://api.themoviedb.org/3/search/person?api_key=6a73b9189fa826bcf76633d1eab12885&language=en-US&query=%7B%22' + this.name + '%22%7D&page=1&include_adult=false';
      const obs = this.http.get(url);
      obs.subscribe((response: any) => {
        console.log(response);
        if (response.results && response.results.length > 0) {
          this.obj = response;
           this.arr = this.obj.results;
        } else {
          this.popToast();
        }
      });
    }

    popToast() {
      this.toasterService.pop('error', 'Result', 'Not Found');
    }
}
