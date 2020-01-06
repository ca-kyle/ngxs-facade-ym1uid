import { Hero } from './hero.model';

export class AddHero {
  public static readonly type = '[AddHero] action';
  constructor(public hero: Hero) {
  }

  public static generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

}

export class DeleteHero {
  public static readonly type = '[DeleteHero] action';
  constructor(public id: string) {
  }
}

export class AddHeroes {
  public static readonly type = '[AddHeroes] action';
  constructor(public heroes: Hero[]) {
  }
}