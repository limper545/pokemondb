import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ResultsEntity } from 'src/app/shared/pokemon';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { PokemonDetails } from 'src/app/shared/pokemon-details';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pd-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon$: Observable<PokemonDetails>;

  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit() {
    this.pokemon$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('name')),
        switchMap(x => this.apiService.getSinglePokemon(x)
        ));
  }
}
