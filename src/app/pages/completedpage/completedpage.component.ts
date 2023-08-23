import { Component } from '@angular/core';
import { Firebase } from 'src/app/services/Firebase.service';

@Component({
  selector: 'app-completedpage',
  templateUrl: './completedpage.component.html',
  styleUrls: ['./completedpage.component.css']
})
export class CompletedpageComponent {
  public completedList = []
  public next_status = "";

  constructor (
    private firebase: Firebase
  ) {
    this.firebase.get("completed").then((item) => {
      this.completedList = item

    })
  }
}
