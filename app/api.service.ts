import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Hero } from './store/heroes/hero.model';

import { RxNgZoneScheduler } from 'ngx-rxjs-zone-scheduler';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private zoneScheduler: RxNgZoneScheduler) {
  }

  // Emulate http request
  public getHeroes(): Observable<Hero[]> {
    return of([
      { id: '1', name: 'Max Ivanov', saying: 'Good work' },
      { id: '2', name: 'Mark Whitfeld', saying: 'Good work' },
      { id: '3', name: 'Eran Shmil', saying: 'Good work' },
      { id: '4', name: 'Artur Androsovych', saying: 'Good work' },
    ]).pipe(delay(2000, this.zoneScheduler.enterNgZone()));
  }


}