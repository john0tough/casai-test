import { Observable } from 'rxjs';
import { NewsPartialState } from './news.reducer';
import { Store, select } from '@ngrx/store';
import { NewsRequest } from './models';
import { Injectable } from '@angular/core';
import { LoadNews } from './news.actions';
import { newsSelectors } from './news.selectors';

@Injectable({ providedIn: 'root'} )
export class NewsFacade {
    loaded$ = this.store.pipe(select(newsSelectors.isLoaded));
    news$ = this.store.pipe(select(newsSelectors.getArticlesData));
    constructor(private store: Store<NewsPartialState>) {}
    loadNews(request: NewsRequest){
        this.store.dispatch(new LoadNews(request));
    }
}