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
    '../../../assets/images/slider_1.jpg',
    '../../../assets/images/slider_2.jpeg',
    '../../../assets/images/slider_3.jpg'
  ];
  ngOnInit() {
  }

}
