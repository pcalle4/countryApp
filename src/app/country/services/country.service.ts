import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
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
    map((restcountries) =>
      CountryMapper.mapRestCountryArrayToCountryArray(restcountries)
    ),
    catchError(() =>
      throwError(() => new Error('No se pudo obtener paises'))
    )
  )
} // método corregido(arriba), la referencia al mal formado (abajo) :
// return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
//   .pipe(
//     map((restcountries)=>{
//       //TODO: revisar por que 
//       return CountryMapper.mapRestCountryArrayToCountryArray(restcountries)
//       //  catchError((error)=>{
//       //   return throwError(
//       //     () => new Error('no se pudo obtener pais')
//       //   )
//       // })


searchByCountry(query: string){
  query = query.toLowerCase();

  return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
  .pipe(
    map((restcountries) =>
      CountryMapper.mapRestCountryArrayToCountryArray(restcountries)
    ),
    delay(2000), //simular una demora
    catchError(() =>
      throwError(() => new Error('No se pudo obtener paises'))
    )
  )
}

searchByAlphaCode(code: string){

  return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
  .pipe(
    map((resp) =>
      CountryMapper.mapRestCountryArrayToCountryArray(resp)
    ),
    map((countries)=> countries.at(0)),
    catchError(() =>
      throwError(() => new Error(`No se pudo obtener paises con ese código ${code}`))
    )
  )
}

}
