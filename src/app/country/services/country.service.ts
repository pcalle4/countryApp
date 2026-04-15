import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interfaces';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'


@Injectable({
  providedIn: 'root'
})
export class CountryService {

private http = inject(HttpClient)

searchByCapital(query:string): Observable<Country[]>{
  query = query.toLowerCase();

  return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
  .pipe(
    map((restcountries)=>{
      //TODO: revisar por que 
      return CountryMapper.mapRestCountryArrayToCountryArray(restcountries)
      //  catchError((error)=>{
      //   return throwError(
      //     () => new Error('no se pudo obtener pais')
      //   )
      // })
    })
  )
}

}
