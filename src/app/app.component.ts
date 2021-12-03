import { Component } from '@angular/core';
import { APPLICATION } from './common/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get appTitle(): string {
    return APPLICATION.TITLE;
  }
}
