import { createAction } from '@ngrx/store';

import { MFE } from './core.reducer';

export const loadedMFE = createAction(
  '[Core] Loaded MFE',
  (payload: MFE) => ({ payload }),
);

export const loadCoreData = createAction('[Core] Load Core Data');
export const loadCoreDataSuccess = createAction('[Core] Load Core Data Success');
