import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './stores/store.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsFiltersComponent } from './news-filters/news-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsListComponent,
    NewsFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
