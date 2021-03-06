import {BaseApi} from '../../../shared/core/base-api';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AVEvent} from '../models/event.model';


@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: AVEvent): Observable<AVEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<AVEvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<AVEvent> {
    return this.get(`events/${id}`);
  }
}
