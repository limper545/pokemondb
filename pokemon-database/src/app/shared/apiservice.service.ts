import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/')
    .pipe(
      map( res => res.results )
    );
  }
}
