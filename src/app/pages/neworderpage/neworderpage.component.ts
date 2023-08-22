import { Firebase } from '../../services/firebase.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-neworderpage',
  templateUrl: './neworderpage.component.html',
  styleUrls: ['./neworderpage.component.css'],
})
export class NeworderpageComponent implements OnInit {
  @ViewChild('select') select!: MatSelect;
  allSelected = false;
  showMissingFieldsMessage = false;

  foods: any[] = [
    {
      value: 'Beef Stroganoff',
      label: 'Beef Stroganoff',
      price: '20$',
      quantity: 1,
    },
    { value: 'Salad', label: 'Salad', price: '24$', quantity: 1 },
    { value: 'Reuben', label: 'Reuben', price: '28$', quantity: 1 },
    { value: 'Sandwich', label: 'Sandwich', price: '24$', quantity: 1 },
    {
      value: 'Walldorf Salad',
      label: 'Walldorf Salad',
      price: '25$',
      quantity: 1,
    },
    { value: 'French Fries', label: 'French Fries', price: '22$', quantity: 1 },
  ];
  formData = {
    createdAt: new Date(),
    orderNumber: 0,
    type: 'Delivery',
    message: '',
    name: '',
    contact: '',
    total: 0,
    status: '',
    selectedItems: '[]',
  };

  constructor(
    private firebase: Firebase,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.checkForm = new FormGroup({
      name: new FormControl(''),
      contact: new FormControl(''),
    });
  }

  ngOnInit(): void {
    (async () => {
      const statusCounts = await this.firebase.getOrderCount();

      this.formData.orderNumber = statusCounts + 1;
    })();
  }
  orderNumber = 0;

  openSelect() {
    this.select.open();
  }
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }
  optionClick(food: any) {
    const index = this.selectedItems.findIndex(
      (item) => item.value === food.value
    );

    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(food);
    }
  }

  transLabels = ['Delivery', 'Takeaway'];
  selectedType: string = 'Delivery';
  inputValues: string[] = [];
  checkForm: FormGroup;
  selectedItems: any[] = [];

  handleInputChange() {
    if (
      this.formData.name &&
      this.formData.contact &&
      this.formData.message &&
      this.selectedItems.length > 0
    ) {
      this.showMissingFieldsMessage = false;
    }
  }

  calculateTotalAmount(): number {
    let total = 0;
    this.selectedItems.forEach((item) => {
      total += parseInt(item.price.replace('$', '')) * item.quantity;
    });
    return total;
  }

  async handleAdd() {
    const isNameEmpty = !this.checkForm.get('name')?.value;
    const isContactEmpty = !this.formData.contact;
    const isMessageEmpty = !this.formData.message;
    const areNoSelectedItems = this.selectedItems.length === 0;

    if (isNameEmpty || isContactEmpty || isMessageEmpty || areNoSelectedItems) {
      this.showMissingFieldsMessage = true;

      try {
        this.formData.status = 'accepted';
        this.formData.total = this.calculateTotalAmount();
        this.formData.name = this.checkForm.get('name')?.value;
        this.formData.contact = this.checkForm.get('contact')?.value;
        const statusCounts = await this.firebase.getOrderCount();

        const selectedValues = this.selectedItems.map((item) => item.value);
        this.formData.selectedItems = JSON.stringify(selectedValues);
        this.formData.type = this.selectedType;
        this.formData.orderNumber = statusCounts + 1; // orderNumber'ı formData'ya ekledik

        const isSuccessful = await this.firebase.post(this.formData);
        if (isSuccessful) {
          this.sharedService.getUpdatedMenuItems(); //her redırect
          this.selectedType = this.selectedType;
          alert('Sipariş başarıyla oluşturuldu');

          this.formData.name = '';
          this.formData.contact = '';
          this.formData.message = '';
          this.selectedItems = [];
          this.showMissingFieldsMessage = false;
          this.formData.orderNumber = statusCounts + 1;
          this.router.navigate(['/accepted']);
        } else {
          alert('Sipariş oluşturulamadı');
        }
      } catch (error) {
        console.error('Sipariş eklenirken hata oluştu: ', error);
      }
      return;
    }
  }

  handleCancel() {
    this.checkForm.reset();
    this.selectedItems = [];
    this.formData.message = '';
    this.showMissingFieldsMessage = false;
    this.formData.message = ''; // Message alanını sıfırla
    this.select.options.forEach((item: MatOption) => item.deselect());
  }

  changeQuantity(item: any, action: string) {
    const selectedItem = this.selectedItems.find((i) => i.value === item.value);

    if (selectedItem) {
      if (action === 'increase') {
        selectedItem.quantity++;
      } else if (action === 'decrease') {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity--;
        }
      }
    }
  }
}
