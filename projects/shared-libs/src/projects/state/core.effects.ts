import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { delay, filter, map, tap, withLatestFrom } from 'rxjs/operators';

import * as CoreActions from './core.actions';
import * as CoreSelectors from './core.selectors';

@Injectable()
export class CoreEffects {
  constructor(private action$: Actions, private store: Store<{}>) {}

  loadCoreData$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoreActions.loadCoreData),
      withLatestFrom(
        this.store.select(CoreSelectors.selectHasLoadedCoreData),
      ),
      filter(([ , hasLoaded ]) => !hasLoaded),
      delay(3000),
      tap(() => console.log('Effect fired')),
      map(() => CoreActions.loadCoreDataSuccess()),
    ),
  );
}
