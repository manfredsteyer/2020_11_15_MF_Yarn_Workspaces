import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { coreReducer, CoreState, initialCoreState } from './core.reducer';
import { CoreEffects } from './core.effects';

// export interface SharedState {
//   core: CoreState;
// }
//
// export const coreReducers: ActionReducerMap<SharedState> = {
//   core: coreReducer,
// };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /******** -----------
    // This would run twice if it were here, which isn't permitted, so the StoreModule
    // has to be instantiated in the shell / main app. Not ideal as MFE would ideally
    // be able to create it itself if needed (when running independently of the shell)
     ----------- *********/

    // StoreModule.forRoot(coreReducers, {
    //   initialState: {
    //     core: initialCoreState,
    //   },
    // }),
    // EffectsModule.forRoot([
    //   CoreEffects,
    // ]),
    // StoreDevtoolsModule.instrument(),
  ],
})
export class StateModule { }
