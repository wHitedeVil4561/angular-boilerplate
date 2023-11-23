import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
interface EventPayload {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  protected behaviourSubject: BehaviorSubject<EventPayload> =
    new BehaviorSubject({ key: '', value: '' });
  broadcastEvent(eventName: string, value: any) {
    this.behaviourSubject.next({ key: eventName, value });
  }
  getEvent(key: string) {
    return this.behaviourSubject.asObservable().pipe(
      filter((e: EventPayload) => e.key === key),
      map((e: EventPayload) => e.value)
    );
  }
}
