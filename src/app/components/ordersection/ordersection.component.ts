import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Firebase } from 'src/app/services/Firebase.service';
import { SharedService } from 'src/app/services/SharedService.service';

@Component({
  selector: 'app-ordersection',
  templateUrl: './ordersection.component.html',
  styleUrls: ['./ordersection.component.css'],
})
export class OrdersectionComponent {
  @Input() dataArray: any[] = [];
  @Input() next_status: string = "";

  transLabels = ["Delivery", "Takeaway"];
  selectedTransType: string = "Delivery";

  constructor(
    private firebase: Firebase,
    private router: Router,
    private sharedService: SharedService){}

  handleSvgClick() {
    const printContent = document.getElementById('print-section'); // Yazdırmak istediğiniz bölümün ID'si
    if (printContent) {
      const printWindow = window.open('', '_blank');
      printWindow!.document.open();
      printWindow!.document.write(`
        <html>
          <head>
            <title>Print</title>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `);
      printWindow!.document.close();
      printWindow!.print();
    }
  }

  async handleMove(orderNumber: number) {

    if( this.next_status=== '') return;

    const isSuccessful = await this.firebase.updateStatus(orderNumber, this.next_status);

    this.sharedService.getUpdatedMenuItems() //her redırect
    this.router.navigate([`/${this.next_status}`]);

  }



}
