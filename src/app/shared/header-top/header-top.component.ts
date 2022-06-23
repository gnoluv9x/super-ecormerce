import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent {
  constructor() {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Language',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'English',
            icon: 'pi pi-fw pi-book',
          },
          {
            label: 'Vietnamese',
            icon: 'pi pi-fw pi-book',
          },
        ],
      },
      {
        label: 'Currency',
        icon: 'pi pi-fw pi-currency',
        items: [
          {
            label: 'USD',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'VND',
            icon: 'pi pi-fw pi-align-right',
          },
        ],
      },
    ];
  }
}
