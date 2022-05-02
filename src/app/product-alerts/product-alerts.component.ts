import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  @Output() onInStockNotify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
