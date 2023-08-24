import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../config/config.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  constructor(private dataService: ConfigService){

  }
  ngOnInit() {
  }

}
