import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class UsersProvider {
  private API_URL = 'http://35.199.126.164/ws-0.0.1-SNAPSHOT/rest/user/'

  constructor(public http: HttpClient) { }


  createAccount(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'register', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }


  login(email: string, password: string) {
    return new Promise((resolve, reject) => {

      let userLogin = new HttpParams().set('email', email).set('password', password);

      this.http.post(this.API_URL + 'doLogin', userLogin).subscribe(
        res => {
          console.log(res);
          resolve(res);
         
        },
        err => {
          console.log("Error occured");
          reject(err);           
        }
      );
    });
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/?per_page=10&page=' + page;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }

      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}
