import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { PokemonDetails } from 'src/app/shared/pokemon-details';

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
