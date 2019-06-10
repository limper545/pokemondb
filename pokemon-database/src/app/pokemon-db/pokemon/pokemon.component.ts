import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon, ResultsEntity } from 'src/app/shared/pokemon';

@Component({
  selector: 'pd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: ResultsEntity;

  @Output() details = new EventEmitter<ResultsEntity>();
  constructor() { }

  ngOnInit() {
  }

}
