import {Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CoiuntryListComponent } from "../../components/coiuntry-list.component/coiuntry-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital',
  imports: [SearchInputComponent, CoiuntryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent { 

  countryService = inject(CountryService)
  query = signal('');

  countryResource = resource({
    params: () => ({query: this.query()}),
    loader: async({params}) =>{
      if(!params.query) return [];

      return await firstValueFrom(
      this.countryService.searchByCapital(params.query)
      )
    }
  })


  // isLoading = signal(false)
  // isError = signal<string|null>(null)
  // countries = signal<Country[]>([])

  // onSearch(query: string){

  //   if (this.isLoading()) return;

  //   this.isLoading.set(true)
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query)
  //   .subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error:(err) =>{
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(`No se encontró ningun país ${query}`)
  //     }
  //   })
  // }
}
