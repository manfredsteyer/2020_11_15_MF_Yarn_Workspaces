import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { selectHasLoadedCoreData } from '../../../../shared-libs/src/main';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<{}>) { }

  ngOnInit(): void {
    this.store.select(selectHasLoadedCoreData)
      .pipe(
        tap(val => console.log('Has loaded', val)),
      ).subscribe();
  }

}
