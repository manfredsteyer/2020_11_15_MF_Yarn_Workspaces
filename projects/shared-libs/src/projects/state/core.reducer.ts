import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as CoreActions from './core.actions';

export interface MFE {
  name: string;
}

export interface CoreState extends EntityState<MFE> {
  hasLoadedCoreData: boolean;
}

export const adapter: EntityAdapter<MFE> = createEntityAdapter<MFE>({
  selectId: (e: MFE) => e.name,
});

export const initialCoreState: CoreState = adapter.getInitialState(
  {
    hasLoadedCoreData: false,
  },
);

const reducer = createReducer(
  initialCoreState,
  on(CoreActions.loadedMFE, (state: CoreState, action) => {
    return adapter.upsertOne(action.payload, state);
  }),
  on(CoreActions.loadCoreDataSuccess, (state: CoreState) => ({
    ...state,
    hasLoadedCoreData: true,
  })),
);

export function coreReducer(
  state: CoreState | undefined,
  action: Action,
): CoreState {
  return reducer(state, action);
}
