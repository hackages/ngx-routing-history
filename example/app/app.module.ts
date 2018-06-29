import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxRoutingHistoryModule} from '../../src/ngx-routing-history.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {DetailComponent} from './components/detail.component';
import {HomeComponent} from './components/home.component';
import {TabComponent} from './components/tab.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailComponent, TabComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    NgxRoutingHistoryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
