import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: ""
  });

  constructor(
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // console.log(this.items);
  }
  clearCart() {
    this.cartService.clearCart();
    console.log("Your cart is clear.");
    this.router.navigate([""]);
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
