import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'av-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: any;
  @Input() currency: any;

  dollar: number;
  grivna: number;

  constructor() { }

  ngOnInit() {
    const {rates} = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.grivna = rates['UAH'] * this.bill.value;
  }
}
