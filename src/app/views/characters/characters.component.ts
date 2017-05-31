import { Component, Input } from '@angular/core';
import { ServicesApiMarvel } from '../../services/characters.service';
import { ObjectCharacters } from "app/models/comics.models";

@Component({
  selector: 'view-root',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [ServicesApiMarvel]
})
export class CharactersComponent {
   objectResult: Array<ObjectCharacters> = [];
  
  private filterSuperHero: string = "Iron Man";

  @Input()
  set filter(recivedValue: string){
    this.filterSuperHero = recivedValue;
    this.getFunction();
  }

 constructor(private apiMarvel: ServicesApiMarvel) {
    this.getFunction();
  }

  getFunction() {
    this.apiMarvel.getCharacters((this.filterSuperHero == "" || this.filterSuperHero == null) ? "Iron Man" : this.filterSuperHero).subscribe((data) => { this.objectResult = data.data.results });
  }

}

