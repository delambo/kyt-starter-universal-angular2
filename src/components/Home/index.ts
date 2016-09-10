import { Component } from '@angular/core';
const styles = require('./styles.scss').toString();

@Component({
  selector: 'home',
  styles: [styles],
  template: `
    <section>
      <p class="paragraph">
        Welcome to the <strong>Universal Angular2 Starter-kyt</strong>.
        This starter kyt should serve as the base for an advanced,
        server-rendered Angular2 app.
      </p>
      <p class="paragraph">
        Check out the Tools section for an outline of the libraries that
        are used in this Starter-kyt.
      </p>
    </section>
  `
})

export class Home {
  constructor() {}
  ngOnInit() {}
}
