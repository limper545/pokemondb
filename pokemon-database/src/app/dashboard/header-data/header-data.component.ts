import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pd-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeaderDataComponent implements OnInit {

  imageSources = [
    'https://cloud.elbenwald.de/blog/Pokemon/Pokemon-Titel.png',
    'https://cloud.elbenwald.de/blog/Pokemon/Bild%202%20Kanto.jpg',
    'https://cloud.elbenwald.de/blog/Pokemon/Bild%209%20SoulSilver%20Lugia.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
  }

}
