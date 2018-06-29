import {Component, OnInit} from '@angular/core';
import {NgxRoutingHistoryProvider} from '../../../src/ngx-routing-history.provider';

@Component({
  selector: 'nrh-detail',
  template: `
    <h1>Detail Page</h1>
    <br/>
    <h2>Previous route: {{previousRoute}}</h2>
    <br/>
    <button type="button" class="btn btn-primary" (click)="back()">Back Button</button>
    <br/>
    <br/>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" [routerLink]="['/home']">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" [routerLink]="['about']">About</a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" [routerLink]="['profil']">Profil</a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" [routerLink]="['contact']">Contact</a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" [routerLink]="['messages']">Messages</a>
          </li>
        </ul>
      </div>
    </nav>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class DetailComponent implements OnInit {
  public previousRoute: string;
  constructor(private routingHistory: NgxRoutingHistoryProvider) {}

  ngOnInit() {
    this.previousRoute = this.routingHistory.getPreviousUrl();
  }

  back() {
    this.routingHistory.back({url: this.previousRoute, defaultRoute: '/home'});
  }
}
