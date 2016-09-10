import { Component } from '@angular/core';
const styles = require('./styles.scss').toString();

@Component({
  selector: 'tools',
  styles: [styles],
  template: `
    <ul>
      <li class="tool">
        <a href="https://expressjs.com/">Express</a> - server-side rendering
      </li>
      <li class="tool">
        <a href="https://angular.io/docs/ts/latest/">Angular2</a> - component library
      </li>
      <li class="tool">
        <a href="https://www.typescriptlang.org/">TypeScript</a> - statically typed JavaScript
      </li>
      <li class="tool">
        <a href="https://github.com/css-modules/css-modules">Sass Modules</a>
        - CSS Modules with a Sass pre-processor for styles
      </li>
    </ul>
  `
})

export class Tools {
  constructor() {}
  ngOnInit() {}
}
