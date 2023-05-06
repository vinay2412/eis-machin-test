import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL =
    "https://devrunner.co.in/machine_test/index.php/web_api/Users";

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.apiURL);
  }

  post(post: Item) {
    return this.httpClient.post<Item>(
      this.apiURL + '/Register',
      JSON.stringify(post)
    );
  }

  login(Item: { user_email: string; user_pwd: string }) {
    return this.httpClient
      .get<any>(
        this.apiURL +
          `/login?user_email=` +
          Item.user_email +
          `&user_pwd=` +
          Item.user_pwd
      )
  }

  find(user_id: number) {
    return this.httpClient.get<any>(
      this.apiURL + '/user_detail?'
      + 'user_id=' + user_id
    );
  }

  update(Item: any) {
    return this.httpClient.get<Item>(
      this.apiURL + '/update_user');
  }

  delete(user_id: number) {
    return this.httpClient.get(
      this.apiURL + '/remove_user'
      + user_id);
  }
}

