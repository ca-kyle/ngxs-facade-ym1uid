import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RxNgZoneSchedulerModule } from 'ngx-rxjs-zone-scheduler';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    NgxSpinnerModule,
    RxNgZoneSchedulerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
