import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as CoreReducer from './core.reducer';

export const selectCoreState = createFeatureSelector<
  CoreReducer.CoreState
>('core');

export const {
  selectAll: selectAllMFEs,
} = CoreReducer.adapter.getSelectors(selectCoreState);

/* Get whether account is invested in any suspended funds */
export const selectHasLoadedCoreData = createSelector(
  selectCoreState,
  (state: CoreReducer.CoreState) => state.hasLoadedCoreData,
);
