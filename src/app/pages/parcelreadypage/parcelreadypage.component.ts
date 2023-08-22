import { Component } from '@angular/core';
import { Firebase } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-parcelreadypage',
  templateUrl: './parcelreadypage.component.html',
  styleUrls: ['./parcelreadypage.component.css'],
})
export class ParcelreadypageComponent {
  public parcelReadyList = [];
  public next_status = 'delivered';

  constructor(private firebase: Firebase) {
    this.firebase.get('parcelready').then((item) => {
      this.parcelReadyList = item;
    });
  }
}
