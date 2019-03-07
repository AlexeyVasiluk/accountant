import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseApi} from '../../../shared/core/base-api';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<any> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }

  getCurrency(): Observable<any> {
    return this.http.get('http://data.fixer.io/api/latest?access_key=348aa6d5acc8a43a047dd9625b988bf5&symbols=UAH,USD,RUB')
      .pipe(map((response) => {
        return response;
      }));
  }
}
