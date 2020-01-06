import { Injectable, NgZone } from '@angular/core';
import { State, Action, StateContext, Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from '../../api.service';
import { AddHero, DeleteHero, AddHeroes } from './heroes.actions';
import { Hero } from './hero.model';
import { HeroesState } from './heroes.state';

@Injectable({ providedIn: 'root' })
export class HeroesService {

  @Select(HeroesState)
  public data$: Observable<Hero[]>;

  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService
  ) { }

  @Dispatch()
  public addHero(name: string, saying: string) {
    return new AddHero({ id: AddHero.generateId(), name, saying });
  }

  @Dispatch()
  public deleteHero(id: string) {
    return new DeleteHero(id);
  }

  @Dispatch()
  public loadAll = () => {
    this.spinner.show();
    return this.api.getHeroes().pipe(
      map((heroes) => new AddHeroes(heroes)),
      finalize(() => this.spinner.hide())
    )
  };
}
