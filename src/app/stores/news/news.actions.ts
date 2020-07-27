import { Action } from '@ngrx/store';
import { NewsRequest } from './models';

export enum NewsActionsEnum {
    LoadNews = '[NewsActions] Load News',
    NewsLoaded = '[NewsActions] News Loaded',
    NewsLoadError = '[NewsActions] News Load Error',
}

export class LoadNews implements Action {
    readonly type = NewsActionsEnum.LoadNews;
    constructor(public payload: NewsRequest) {}
}

export class NewsLoaded implements Action{
    readonly type = NewsActionsEnum.NewsLoaded;
    constructor(public payload: any) {}
}

export class NewsLoadError implements Action{
    readonly type = NewsActionsEnum.NewsLoadError;
    constructor(public error: any) {}
}

export type NewsActionTypes = LoadNews
| NewsLoaded
| NewsLoadError;

export const fromNewsAction = {
 LoadNews,
 NewsLoaded,
 NewsLoadError
};
