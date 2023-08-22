import { Component, OnInit } from '@angular/core';
import { Firebase } from 'src/app/services/firebase.service';
import { SharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public countList: number[] = [];
  constructor(
    private firebase: Firebase,
    private sharedService: SharedService,
    private dataService: SharedService
  ) {}
  menuItems = [
    { label: 'New Order', route: '/neworder', key: 'newOrder', number: '' },
    { label: 'Accepted', route: '/accepted', key: 'accepted', number: 0 },
    { label: 'Cooking', route: '/cooking', key: 'cooking', number: 0 },
    {
      label: 'Parcel Ready',
      route: '/parcelready',
      key: 'parcelReady',
      number: 0,
    },
    { label: 'Delivered', route: '/delivered', key: 'delivered', number: 0 },
    { label: 'Completed', route: '/completed', key: 'completed', number: 0 },
  ];

  menuItemColors: { [key: string]: boolean } = {};

  handleMouseEnter(key: string) {
    this.menuItemColors[key] = true;
  }

  handleMouseLeave(key: string) {
    this.menuItemColors[key] = false;
  }

  ngOnInit(): void {
    (async () => {
      this.dataService.currentMenuItems.subscribe((value) => {
        this.menuItems = value;
      });
    })();
  }
}
