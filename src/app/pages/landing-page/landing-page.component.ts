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
  data = [
    {name: 'row1', tasks: [
        {name: 'task1', from: Date.now(), to: Date.now() + 1},
        {name: 'task2', from: Date.now(), to: Date.now() + 2}
      ]
    }
  ]
  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.get_properties()
      .subscribe((data) => {
        this.allProperties = data;
      });
  }
}
