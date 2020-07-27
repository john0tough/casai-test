import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsApiUrl } from './constants';
import { environment } from './../../../environments/environment';
import { NewsRequest } from './models';

@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private httpService: HttpClient) {}

  getNews(request: NewsRequest) {
    return this.httpService.get(
      `${newsApiUrl}everything?q=${request.topic}&from=${request.from}&to=${request.to}&sortBy=popularity&apiKey=${environment.newsApiKey}`
    );
  }
}
