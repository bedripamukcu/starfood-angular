
import { Injectable } from '@angular/core';
import { Firebase } from './Firebase.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
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
  private myVariableSubject = new BehaviorSubject<any>(this.menuItems);
  currentMenuItems = this.myVariableSubject.asObservable();

  constructor(private firebase: Firebase) {
    this.getUpdatedMenuItems();
  }

  async getUpdatedMenuItems() {
    const countList = await this.firebase.getAllStatusCounts();
    countList.forEach((item, index) => {
      this.menuItems[index + 1].number = item;
    });
    this.myVariableSubject.next(this.menuItems);
    return this.menuItems;
  }
}
