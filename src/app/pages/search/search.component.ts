import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  result: any;
  length: number;
  sex: string = '';
  age: string = '';
  size: string = '';
  sort: string = '';
  page: number = 1;
  limit: number = 12;
  loading: boolean = false;
  status = null;

  constructor(private api: ApiService, private cookie: CookieService) { }

  ngOnInit() {
    this.checkStatus();
  }

  checkStatus() {
    if (this.cookie.get('authToken')) {
      this.status = 1;
      this.search();
    }
    else {
      this.status = 0;
    }
  }
  search() {
    this.loading = true;
    this.api.search(this.sex, this.size, this.age, this.sort, this.limit, this.page).then((data: any) => {
      this.result = data.data.result;
      this.length = data.data.count;
      this.page = data.data.page;
      this.loading = false;
    })
  }
  setSex(sex) {
    this.sex = sex;
    this.page = 1;
    this.search();
  }
  setAge(age) {
    this.age = age;
    this.page = 1;
    this.search();
  }
  setSize(size) {
    this.size = size;
    this.page = 1;
    this.search();
  }
  setPage(page) {
    this.page = page;
    this.search();
  }
  setSort(sort) {
    this.sort = sort;
    this.page = 1;
    this.search();
  }
  reset() {
    this.page = 1;
    this.sex = '';
    this.age = '';
    this.size = '';
    this.sort = '';
    this.search();
  }


}
