import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../config/config.service";
import {PropertyDetailModel} from "../../../lib/model/property-detail.model";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  allProperties: PropertyDetailModel[] | undefined;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.get_properties()
      .subscribe((data) => {
        this.allProperties = data;
      });
  }
}
