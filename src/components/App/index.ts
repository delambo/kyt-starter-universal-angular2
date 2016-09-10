
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { Home } from '../Home';
import { Tools } from '../Tools';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from '@angular/router-deprecated';

const styles = require('./styles.scss').toString();

@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  styles: [styles.toString()],
  template: `
    <i class="logo"></i>
    <nav class="nav">
      <a class="route" [routerLink]=" ['./Home'] ">Home</a>
      <a class="route" [routerLink]=" ['./Tools'] ">Tools</a>
    </nav>
    <main class="content">
      <router-outlet></router-outlet>
      <p>{{ server }}</p>
    </main>
  `
})

@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/tools', component: Tools, name: 'Tools' },
  { path: '/**', redirectTo: ['Home'] }
])

export class App {
  title = 'Angular 2 Universal Starter-kyt';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() { }
}

// Application wide providers
export const APP_PROVIDERS = [];
