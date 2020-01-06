import { Component } from '@angular/core';
import { HeroesService } from './store/heroes/heroes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' 
})
export class AppComponent  {
  constructor(public heroes: HeroesService) { }
}
