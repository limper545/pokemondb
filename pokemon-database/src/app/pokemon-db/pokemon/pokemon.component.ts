import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResultsEntity } from 'src/app/shared/pokemon';

@Component({
  selector: 'pd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Input() pokemon: ResultsEntity;

  @Output() details = new EventEmitter<ResultsEntity>();

}
