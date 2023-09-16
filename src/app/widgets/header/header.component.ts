import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    // TODO: Change by permission
    this.items = [
      {
        label: 'Status',
        icon: 'pi pi-fw pi-chart-bar',
        styleClass: 'right-icon',
        routerLink: 'status',
        visible: false
      },
      {
        label: 'Invest',
        icon: 'pi pi-fw pi-dollar',
        styleClass: 'right-icon',
        routerLink: 'invest'
      },
      {
        label: 'Publish',
        icon: 'pi pi-fw pi-home',
        styleClass: 'right-icon',
        routerLink: 'publish',
        visible: false
      },
    ]
  }
}
