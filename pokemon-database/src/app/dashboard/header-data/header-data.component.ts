import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pd-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeaderDataComponent implements OnInit {

  // FIXME: Keine Bilder aus dem Internet laden
  imageSources = [
    'https://www.lunchactually.com/ch/wp-content/uploads/bfi_thumb/Pokemon-pokemon-13598061-1280-1024-n2boa7sxzkgdc09dp655n80m1wphbv42dt9pnita60.jpg',
    'https://thehivegaming.s3.us-west-2.amazonaws.com/uploads/2019/01/mCuiXT4KER5lUUbJlCeDS4WcSwgcrKCvHlmRc3vC.jpeg',
    'https://2ij7hk3p1vra3uhoox411gzf-wpengine.netdna-ssl.com/wp-content/uploads/bfi_thumb/Pokemon-Go-1-o6az9t59e7qemgfdlyztkp1sr63556mo888fqplmm0.jpg'
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
