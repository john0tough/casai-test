import { NewsRespose } from './models';
import { NewsActionsEnum, NewsActionTypes } from './news.actions';

export const NEWS_FEATURE_KEY = 'news';

export interface NewsState {
  data: NewsRespose;
  loaded: boolean;
}

export interface NewsPartialState {
  readonly [NEWS_FEATURE_KEY]: NewsState;
}

export const newsInitialState: NewsState = {
  data: null,
  loaded: false,
};

export function newsReducer(
  state = newsInitialState,
  action: NewsActionTypes
): NewsState {
  switch (action.type) {
    case NewsActionsEnum.NewsLoaded: {
      state = {
        ...state,
        data: { ...action.payload },
        loaded: true,
      };
    }
  }

  return state;
}
