import { Component } from '@angular/core';
import { setData } from 'shared-libs';

setData('Hello from main!');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
