import { Component } from '@angular/core';
import { Firebase } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cookingpage',
  templateUrl: './cookingpage.component.html',
  styleUrls: ['./cookingpage.component.css']
})
export class CookingpageComponent {
    public cookingList = []
    public next_status = "parcelready";

  constructor (
    private firebase: Firebase
  ) {
    this.firebase.get("cooking").then((item) => {
      this.cookingList = item

    })
  }
}
