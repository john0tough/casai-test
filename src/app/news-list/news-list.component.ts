import { Component, OnInit, Input } from '@angular/core';
import { NewsFacade } from '../stores/news/news.facade';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  isLoaded$ = this.newsFacade.loaded$;
  articles$ = this.newsFacade.news$;
  constructor(private newsFacade: NewsFacade) {}

  ngOnInit(): void {
  }

}
