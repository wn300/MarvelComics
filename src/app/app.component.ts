import { Component } from '@angular/core';
import { HeaderComponent } from 'app/layout/header.component';
import { FooterComponent } from "app/layout/footer.component";
import { CharactersComponent } from "app/views/characters/characters.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [HeaderComponent, FooterComponent, CharactersComponent],
})
export class AppComponent {
  public filter:string;
   ShowFilter(event):void{
      //console.log(event.Filter);
      this.filter = event.Filter;
    }
}
