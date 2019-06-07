import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'pd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  @Output() details = new EventEmitter<Pokemon>();
  constructor() { }

  ngOnInit() {
  }

  getDetails() {
    // TODO: Brauche die ID und nicht die ganze URL
    this.details.emit(this.pokemon);
  }

}
