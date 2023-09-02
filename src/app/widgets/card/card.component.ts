import {Component, Input} from '@angular/core';
import {PropertyDetailModel} from "../../../lib/model/property-detail.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'nes-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() property: PropertyDetailModel = <PropertyDetailModel>{};
  visible: boolean = false;
  options: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit() {
  }

  protected readonly open = open;

  openMap() {
    this.visible = true;
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };
  }

  openDetail(id: number){
    this.router.navigate([`/detail/${id}`]);
  }
}
