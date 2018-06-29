import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DetailComponent} from './components/detail.component';
import {HomeComponent} from './components/home.component';
import {TabComponent} from './components/tab.component';

const APP_ROUTES: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent,
    children: [
      {
        path: 'about',
        component: TabComponent
      },
      {
        path: 'profil',
        component: TabComponent
      },
      {
        path: 'contact',
        component: TabComponent
      },
      {
        path: 'messages',
        component: TabComponent
      },
      {path: '**', redirectTo: 'about'}
    ]
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
