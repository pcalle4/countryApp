import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './coiuntry-list.component.html',

})
export class CoiuntryListComponent { 

  countries = input.required<RESTCountry[]>()
}
