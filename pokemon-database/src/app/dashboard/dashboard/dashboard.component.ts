import { Component, OnInit } from '@angular/core';
import { Pokemon, ResultsEntity } from 'src/app/shared/pokemon';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'pd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokemons: ResultsEntity[];

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getAllPokemons().subscribe( pokemon => this.pokemons = pokemon);
  }

}
