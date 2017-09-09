import { Component } from '@angular/core';

// RootComponent and html template button and form input and bootstrap classes applied
@Component({
  selector: 'app-root',
  template: `<section class="container" id="login">
                <form class="form-group col-md-6 col-md-offset-3">
                <input type="text" class="form-control" id="exampleInputEmail2" placeholder="FirstName">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
             </section>`,
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'app';
}
