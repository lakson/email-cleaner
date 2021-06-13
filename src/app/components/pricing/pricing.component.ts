import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  isAnnualSelected: boolean = false;
  constructor() { }

  ngOnInit() {
  }
}
