[![Build Status][circle-badge]][circle-badge-url]
[![npm][npm-badge]][npm-badge-url]

<h1 align="center">
<img width="40" valign="bottom" src="https://angular.io/assets/images/logos/angular/angular.svg">
ngx-routing-history
</h1>
<h4 align="center">A provider for routing history.</h4>

---

<div align="center" markdown="1">
<a href="#installation">Installation</a> |
<a href="#setup">Setup</a> |
<a href="#documentation">Documentation</a> |
</div>

---

# Overview

Why use ngx-routing-history, how to install and use.

### What is it?

A provider for routing history.

Check out the documentation below.

### Installation

```bash
yarn add @hackages/ngx-routing-history

# OR

npm i @hackages/ngx-routing-history
```

### Setup

Just add ngx-routing-history to your module & setup the RouterModule like this for example:

### AppRoutingModule

```js
const APP_ROUTES: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### AppModule

```js
import { NgxRoutingHistoryModule } from '@hackages/ngx-routing-history';

@NgModule({
  imports: [
    AppRoutingModule,
    NgxRoutingHistoryModule
  ]
})
```

# Documentation

### ngx-routing-history

ngx-routing-history provides you 7 functions which will help you manage your history

### ngx-routing-history #loadRouting

This function need to be used in your root component. It will begin the record of your navigation in your website

```js
export class AppComponent {
  constructor(routingHistory: NgxRoutingHistoryProvider) {
    routingHistory.loadRouting();
  }
}
```

### ngx-routing-history #getHistory

getHistory will give you an array with all your routing history

### ngx-routing-history #getUrlByIndex

with getUrlByIndex you need pass in argument the index of the route you want get in the history stack

```js
getUrlByIndex(index);
```

### ngx-routing-history #getCurrentUrl

with getCurrentUrl you get the current route url

### ngx-routing-history #getPreviousUrl

with getPreviousUrl you get the previous route url

### ngx-routing-history #go

this function will just pass the url in parameter to the router navigate function

### ngx-routing-history #back

the back function take an object with two possible key the first is an url you can give and if you have it in your stack that will clean every route in the stack after the route pass. If you pass nothing that you just take the previousUrl.

The second key in the object is defaultRoute, you can use this one if you want a backup route if there is no route in the history stack

```js
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
```

[circle-badge]: https://circleci.com/gh/hackages/ngx-routing-history.svg?style=shield
[circle-badge-url]: https://circleci.com/gh/hackages/ngx-routing-history
[npm-badge]: https://img.shields.io/npm/v/@hackages/ngx-routing-history.svg
[npm-badge-url]: https://www.npmjs.com/package/@hackages/ngx-routing-history

# Contributing

Please see the [contributing](CONTRIBUTING.md) guidelines.
