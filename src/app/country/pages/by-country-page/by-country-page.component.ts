import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CoiuntryListComponent } from "../../components/coiuntry-list.component/coiuntry-list.component";

@Component({
  selector: 'by-country-page',
  imports: [SearchInputComponent, CoiuntryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent { }
