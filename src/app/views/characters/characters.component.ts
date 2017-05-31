import { Component, Input, SimpleChanges } from '@angular/core';
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
  
  @Input() filter: string;

  filerSearch: string="Iron Man";

  ngOnChanges(changes: SimpleChanges) {
    this.filerSearch = this.filter == "" ? "Iron Man" : this.filter;
    this.getFunction(this.filerSearch);
  }

 constructor(private apiMarvel: ServicesApiMarvel) {
    this.getFunction(this.filerSearch);
  }

  getFunction(filter: string) {
    this.apiMarvel.getCharacters(filter).subscribe((data) => { this.objectResult = data.data.results });
  }

}

