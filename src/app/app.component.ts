import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less','./reset.less']
})
export class AppComponent {
  title = 'sample-app';
  constructor(){
    document.body.style.height='100vh';
    document.body.style.background="#e2e2e247";
  }
}
