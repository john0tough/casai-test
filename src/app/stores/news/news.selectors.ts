import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState, NEWS_FEATURE_KEY } from './news.reducer';

const getAuthState = createFeatureSelector<NewsState>(NEWS_FEATURE_KEY);

export const getArticlesData = createSelector(
  getAuthState,
  (state: NewsState) => state.data && state.data.articles
);

export const isLoaded = createSelector(
  getAuthState,
  (state: NewsState) => state.data && state.loaded
);

export const newsSelectors = {
  getArticlesData,
  isLoaded
};
