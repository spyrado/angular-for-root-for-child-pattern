import { PollingModule, PollingService } from 'polling';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `<p>Polling count times: {{ polling.polling$ | async }}</p>`,
  // template: `<p>Polling count times: {{ polling.polling$ | async }}</p>`,
  standalone: true,
  imports: [AsyncPipe, PollingModule],
})
export class HomeComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit(): void {}
}