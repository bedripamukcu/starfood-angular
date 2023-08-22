import { Component } from '@angular/core';
import { Firebase } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-deliveredpage',
  templateUrl: './deliveredpage.component.html',
  styleUrls: ['./deliveredpage.component.css']
})
export class DeliveredpageComponent {
  public deliveredList = []
  public next_status = "completed";
  constructor (
    private firebase: Firebase
  ) {
    this.firebase.get("delivered").then((item) => {
      this.deliveredList = item

    })
  }
}
