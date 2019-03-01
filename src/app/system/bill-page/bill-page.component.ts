import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs';

@Component({
  selector: 'av-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscr1: Subscription;
  subscr2: Subscription;
  currency: any;
  bill: any;
  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.subscr1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [any, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.subscr1.unsubscribe();
    if (this.subscr2) {
      this.subscr2.unsubscribe();
    }
  }

  onRefresh() {
    this.isLoaded = false;
    this.subscr2 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      });
  }
}
