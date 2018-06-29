import {Component, OnInit} from '@angular/core';
import {NgxRoutingHistoryProvider} from '../../../src/ngx-routing-history.provider';

@Component({
  selector: 'nrh-home',
  template: `
    <h1>Example Routing History</h1>
    <button type="button" class="btn btn-primary" (click)="navigate()">Go to detail</button>
    <br/>
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>History</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let route of history">
          <th>{{route}}</th>
        </tr>
      </tbody>
    </table>
  `
})
export class HomeComponent implements OnInit {
  public history: string[];
  constructor(private routingHistory: NgxRoutingHistoryProvider) {}

  ngOnInit() {
    this.history = this.routingHistory.getHistory();
  }

  navigate() {
    this.routingHistory.go('/detail');
  }
}
