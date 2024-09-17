import { PollingModule, PollingService } from 'polling';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lazy',
  template: `
    <p>Polling count times (lazy): {{ polling.polling$ | async }}</p>
  `,
  standalone: true,
  imports: [AsyncPipe, PollingModule],
})
export class LazyComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit(): void {}
}