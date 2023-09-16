import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { ActivatedRoute } from '@angular/router';
import { PropertyDetailModel } from '../../../lib/model/property-detail.model';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'nes-propery-detail-page',
  templateUrl: './propery-detail-page.component.html',
  styleUrls: ['./propery-detail-page.component.scss'],
})
export class ProperyDetailPageComponent implements OnInit {
  isLoading = true;
  failed = false;
  responsiveOptions: any[] = [];
  images: any[] = [];
  property: PropertyDetailModel | undefined;

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
    if (id === null) {
      this.failed = true;
      return;
    }
    this.getDetails(id);
  }

  getDetails(id: string) {
    this.configService.get_property_detail(id).subscribe({
      next: (data) => {
        this.property = data;
        this.isLoading = false;
        this.getImages(this.property.images);
      },
      error: () => {
        //Error callback
        this.failed = true;
        this.isLoading = false;
      },
    });
  }

  getImages(imagesId: string[]) {
    console.log(imagesId);
    for (let i of imagesId) {
      this.images.push({
        previewImageSrc: `${environment.imageUrl}/${i}`,
        alt: i,
      });
    }
    console.log(this.images);
  }
}
