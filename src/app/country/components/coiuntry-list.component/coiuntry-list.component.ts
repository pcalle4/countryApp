import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './coiuntry-list.component.html',

})
export class CoiuntryListComponent { 

  countries = input.required<Country[]>()
}
