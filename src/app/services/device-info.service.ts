import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { EventService } from './event.service';
import { EVENTNAME } from '../constants/event.constant';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  windowSize$: Observable<Event>;
  constructor(private eventService: EventService) {
    this.windowSize$ = fromEvent(window, 'resize');
    this.windowSize$.subscribe((event) => {
      this.eventService.broadcastEvent(EVENTNAME.windowResize, event);
    });
  }
}
