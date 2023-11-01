import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
interface Customer {
  id: number;
  picture: string;
  age: number;
  name: string;
  gender:string;
  email: string;
  phone:number;
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],

})
export class CustomerComponent implements OnInit{
  addProductForm: FormGroup;
  editForm: FormGroup;
  selectedCustomer: Customer | undefined;
  visibleEditForm: boolean = false;
  customerToEdit: Customer | null = null;
  //xử lý phân trang
  p:number=1;
  //xử lý loát dữ liệu từ api json nodejs
  customers: Customer[] = [];
  title="Customer";
  constructor(private http: HttpClient ,) {
    this.addProductForm = new FormGroup({
      id:new FormControl(''),
      picture: new FormControl(''),
      age: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    });
    this.editForm = new FormGroup({
      id:new FormControl(''),
      picture: new FormControl(''),
      age: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    });this.productToDeleteId = 0;
   }

   //from dialog
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  ngOnInit() {
    this.getCustomer();
  }
  getCustomer() {
    this.http.get<Customer[]>('http://localhost:3000/Customer').subscribe((customers) => {
      this.customers = customers;
    });
  }
  showEditForm() {
    this.visibleEditForm = true;
  }

  hideEditForm() {
    this.visibleEditForm = false;
  }

  // Trong component
showDeleteConfirmation = false;
productToDeleteId: number;

deleteProduct(id: number): void {
  this.productToDeleteId = id;
  this.showDeleteConfirmation = true;
}

confirmDelete(): void {
  this.http.delete<void>(`http://localhost:3000/Customer/${this.productToDeleteId}`).subscribe(() => {
    this.customers = this.customers.filter(customer => customer.id !== this.productToDeleteId);
  });

  this.showDeleteConfirmation = false;
}

cancelDelete(): void {
  this.showDeleteConfirmation = false;
}


  addCustomer() {
    // Create a new product object with the form data
    const newCustomer: Customer = {
      id: this.addProductForm.value.phone.id,
      picture: this.addProductForm.value.picture,
      age: this.addProductForm.value.age,
      name: this.addProductForm.value.name,
      gender: this.addProductForm.value.gender,
      email: this.addProductForm.value.email,
      phone: this.addProductForm.value.phone
    };

    // Send a POST request to the `/product` endpoint with the new product object
    this.http.post<Customer>('http://localhost:3000/Customer', newCustomer).subscribe((Customer) => {
      // Add the new product to the `products` array
      this.customers.push(Customer);
    });
  }
  // Existing code

  // Function to handle the "Edit" button click event
  editCustomer(customer: Customer) {
    this.customerToEdit = customer;

    // Set the form values to the customer data
    this.editForm.patchValue({
      id: customer.id,
      picture: customer.picture,
      age: customer.age,
      name: customer.name,
      gender: customer.gender,
      email: customer.email,
      phone: customer.phone,
    });

    this.visibleEditForm = true;
  }

  // Function to handle the "Save" button click event in the edit form
  saveCustomer() {
    // Get the updated customer data from the form
    const updatedCustomer: Customer = {
      id: this.editForm.value.id,
      picture: this.editForm.value.picture,
      age: this.editForm.value.age,
      name: this.editForm.value.name,
      gender: this.editForm.value.gender,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
    };

    // Send a PUT request to update the customer data
    this.http
      .put<Customer>(
        `http://localhost:3000/Customer/${updatedCustomer.id}`,
        updatedCustomer
      )
      .subscribe((customer) => {
        // Update the customer data in the customers array
this.customers = this.customers.map((c) => {
          if (c.id === customer.id) {
            return customer;
          } else {
            return c;
          }
        });

        // Hide the edit form
        this.visibleEditForm = false;
      });
  }

  // Function to handle the "Cancel" button click event in the edit form
  cancelEdit() {
    this.visibleEditForm = false;
  }

  // Existing code

}
