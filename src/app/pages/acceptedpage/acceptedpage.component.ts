import { Firebase } from '../../services/Firebase.service';
import { Component, } from '@angular/core';


@Component({
  selector: 'app-acceptedpage',
  templateUrl: './acceptedpage.component.html',
  styleUrls: ['./acceptedpage.component.css']
})
export class AcceptedpageComponent  {
  public acceptedList = []
  public next_status = "cooking";
  constructor (
    private firebase: Firebase
  ) {
    this.firebase.get("accepted").then((item) => {
      this.acceptedList = item
    })
  }


}
