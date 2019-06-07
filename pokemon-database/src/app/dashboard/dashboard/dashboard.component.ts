import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'pd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    console.log(this.apiService.getAllPokemons().subscribe( pokemon => this.pokemons = pokemon));
    // TODO: Was tue ich mit so einem Json?
    // TODO: Wieso bekomme ich ein NgObject fehler beim durchlaufen?
    this.apiService.getAllPokemons().subscribe( pokemon => this.pokemons = pokemon['results']);
  }

}
