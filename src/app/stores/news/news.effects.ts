import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, tap } from 'rxjs/operators';
import * as NewsAction from './news.actions';
import { NewsService } from './news.service';
@Injectable()
export class NewsEffects {
    constructor(
        private actions$: Actions,
        private newsService: NewsService
    ){}
    @Effect()
    newsRequesStart$: Observable<any> = this.actions$.pipe(
      ofType<NewsAction.LoadNews>(NewsAction.NewsActionsEnum.LoadNews),
      switchMap(( {payload} ) => {
        return from(this.newsService.getNews(payload)).pipe(
          switchMap((news) => [
            new NewsAction.NewsLoaded(news),
          ]),
          catchError(({ error }) => {
            return of(new NewsAction.NewsLoadError(error));
          }),
        );
      }));

    @Effect({ dispatch: false })
    newsRequesSuccess$: Observable<any> = this.actions$.pipe(
      ofType<NewsAction.NewsLoadError>(NewsAction.NewsActionsEnum.NewsLoadError),
      tap(({ error }) => {
        /* required action on api error*/
        console.log(error); 
      }));
}
