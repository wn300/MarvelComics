import { Component, Input } from '@angular/core';
import { ServicesApiMarvel } from '../../services/characters.service';
import { ObjectCharacters } from "app/models/characters.model";

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
  set recivedfilter(recivedValue: string){
    this.filterSuperHero = recivedValue;
    this.getFunction();
  }

 constructor(private apiMarvel: ServicesApiMarvel) {
    this.getFunction();
  }

  getFunction() {
    // debugger
    this.apiMarvel.getCharacters((this.filterSuperHero == "" || this.filterSuperHero == null) ? "Iron Man" : this.filterSuperHero).subscribe((data) => { this.objectResult = data.data.results });
  }

  over(){
    // debugger
    document.getElementById("TitleName").style.color = "#DC1D23"
  }

  leave(){
    document.getElementById("TitleName").style.color = "#000000"
  }

}

