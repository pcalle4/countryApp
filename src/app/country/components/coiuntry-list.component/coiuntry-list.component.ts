import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './coiuntry-list.component.html',

})
export class CoiuntryListComponent { 

  countries = input.required<Country[]>()

  errorMessage = input<string |unknown| null>(null)
  isLoading =input<boolean>(false)
  isEmpty =input<boolean>(false)
}
