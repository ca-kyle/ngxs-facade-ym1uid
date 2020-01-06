import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { HeroesState } from './heroes/heroes.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([HeroesState]),
    NgxsDispatchPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot()
  ],
  exports: [NgxsModule]
})
export class StoreModule {
}
