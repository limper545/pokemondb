import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { } from 'fs'
const testFolder = './images/';
const fs = require('fs');

@Component({
  selector: 'pd-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.scss']
})
export class HeaderDataComponent {
  /**  TODO: Hierfür gibt es keine gute Lösung, da die Bilder vom Server kommen sollten
      Hier wird ein eigenes NPM Packet später geschrioeben*/

  imageSources = [
    '../../../assets/images/slider_1.jpg',
    '../../../assets/images/slider_2.jpeg',
    '../../../assets/images/slider_3.jpg'
  ];

}
