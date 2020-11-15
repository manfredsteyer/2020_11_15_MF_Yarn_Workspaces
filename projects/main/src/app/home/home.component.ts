import { Component, OnInit } from '@angular/core';
import { loadCoreData, getData } from 'shared-libs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'main: ' + getData();

  constructor(private store: Store<{}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCoreData());
  }

}
