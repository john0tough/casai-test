import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NewsFacade } from '../stores/news/news.facade';

@Component({
  selector: 'app-news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss'],
})
export class NewsFiltersComponent implements OnInit {
  filtersForm = new FormGroup({
    from: new FormControl(this.getCurrDate()),
    to: new FormControl(this.getCurrDate()),
    topic: new FormControl('apple'),
  });
  constructor(private newsFacade: NewsFacade) {}

  ngOnInit(): void {
    /* load initial values */
    this.updateNews(
      this.formatDate(this.filtersForm.controls.from.value),
      this.formatDate(this.filtersForm.controls.to.value),
      this.filtersForm.controls.topic.value,
    );

    this.filtersForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) =>
      /* Here needs to eval dates to avoid overlapping*/
        this.updateNews(
          this.formatDate(value.from),
          this.formatDate(value.to),
          value.topic
        )
      );
  }

  private formatDate(date: { day: number; month: number; year: number }) {
    return `${date.year}-${date.month}-${date.day}`;
  }

  private getCurrDate() {
    const today = new Date();
    return {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
    };
  }

  private updateNews(from: string, to: string, topic: string) {
    this.newsFacade.loadNews({
      from,
      to,
      topic,
    });
  }
}
