import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';


export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');

@Injectable()
export class PollingService {

  public polling$: Observable<number>
  
  constructor(@Optional() @Inject(INTERVAL) private interval: number) {
    this.polling$ = timer(0 , this.interval || 1000).pipe(shareReplay());
  }
}