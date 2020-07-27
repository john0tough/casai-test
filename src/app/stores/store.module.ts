import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NEWS_FEATURE_KEY, newsReducer, newsInitialState } from './news/news.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './news/news.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(NEWS_FEATURE_KEY, newsReducer, {
      initialState: newsInitialState,
    }),
    EffectsModule.forFeature([
        NewsEffects,
    ])
  ],
})
export class AppStoreModule {}
