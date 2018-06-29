import {Component, OnInit} from '@angular/core';
import {NgxRoutingHistoryProvider} from '../../../src/ngx-routing-history.provider';

@Component({
  selector: 'nrh-tab',
  template: `
    <h2>Current route: {{currentRoute}}</h2>
    <br/>
    <h2>Previous route: {{previousRoute || 'No previous route'}}</h2>
  `
})
export class TabComponent implements OnInit {
  public currentRoute: string;
  public previousRoute: string;
  constructor(private routingHistory: NgxRoutingHistoryProvider) {}

  ngOnInit() {
    this.currentRoute = this.routingHistory.getCurrentUrl();
    this.previousRoute = this.routingHistory.getPreviousUrl();
  }
}
