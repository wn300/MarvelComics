import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() superHero: string;
  @Output() superHeroChange: EventEmitter<string> = new EventEmitter();
 
  set searchHero(sendValue: string){  
    this.superHeroChange.emit(sendValue)
  }

  constructor() {}
}
