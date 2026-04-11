import {Component } from '@angular/core';

@Component({
  selector: 'by-capital',
  imports: [],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent { 

  onSearch(value: string){
    console.log({value})
  }
}
