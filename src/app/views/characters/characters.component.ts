import { Component, Input, Injectable, Pipe } from '@angular/core';
import { ServicesApiMarvel } from '../../services/characters.service';
import { ObjectCharacters } from "app/models/characters.model";
import { PaginatePipe } from "ng2-pagination";

import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Item_Comic } from '../../models/item_comic.model';


@Component({
  selector: 'view-root',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [ServicesApiMarvel],
})
export class CharactersComponent {
  public order: string = 'name';
  public page: string;

  public objectResult: Array<ObjectCharacters> = [];

  private filterSuperHero: string = "";

  @Input()
  set recivedfilter(recivedValue: string) {
    this.filterSuperHero = recivedValue;
    this.getFunction();
  }

  constructor(private apiMarvel: ServicesApiMarvel) {
    this.getFunction();
  }

  getFunction() {
    //debugger
    if (this.filterSuperHero == "" || this.filterSuperHero == null) {
      this.apiMarvel.getCharactersAll().subscribe((data) => { this.objectResult = data.data.results });
    } 
    else {
      this.apiMarvel.getCharactersFilter(this.filterSuperHero).subscribe((data) => { this.objectResult = data.data.results });
    }
  }

  sorByChracters(newValueSorBy:string){
    //debugger
    this.order = newValueSorBy;
  }

  over(id: string) {
    //debugger
    document.getElementById("TitleName" + id).style.color = "#EC1E22"
  }

  leave(id: string) {
    document.getElementById("TitleName" + id).style.color = "#000000"
  }
}

