import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  @Output() SendSuperHero = new EventEmitter();

  constructor() {}
  ValueFilter: string

  private FilterSuperHeros(event) {  
    this.SendSuperHero.emit({ Filter: this.ValueFilter });
  }
}
