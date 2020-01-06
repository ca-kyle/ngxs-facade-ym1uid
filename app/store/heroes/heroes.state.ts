import { State, Action, StateContext } from '@ngxs/store';

import { AddHero, DeleteHero, AddHeroes } from './heroes.actions';
import { Hero } from './hero.model';

@State<Hero[]>({
  name: 'heroes',
  defaults: []
})
export class HeroesState {

  @Action(AddHero)
  private addHeroByState(ctx: StateContext<Hero[]>, { hero }: AddHero) {
    ctx.setState([ ...ctx.getState(), hero ]);
  }

  @Action(DeleteHero)
  private deleteHeroByState(ctx: StateContext<Hero[]>, { id }: DeleteHero) {
    ctx.setState(ctx.getState().filter((hero: Hero) => hero.id !== id));
  }

  @Action(AddHeroes)
  private addHeroesByState(ctx: StateContext<Hero[]>, { heroes }: AddHeroes) {
    ctx.setState(heroes);
  }

}
