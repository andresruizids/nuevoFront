import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the RestaurantesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantesProvider {
  apiUrl = 'http://localhost:8080';
  constructor(public http: HttpClient) {
    console.log('Hello RestaurantesProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/restaurants/findall').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addUser(data) {
    return new Promise((resolve, reject) => {
      console.log(JSON.stringify(data));
      this.http.post(this.apiUrl + '/restaurant/save', JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
