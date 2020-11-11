import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { StateModule } from '@shared-libs';
import { StateModule } from '../../../shared-libs/src/projects/main';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { coreReducer, CoreState, CoreEffects, initialCoreState } from '../../../shared-libs/src/projects/main';

export interface SharedState {
  core: CoreState;
}

export const coreReducers: ActionReducerMap<SharedState> = {
  core: coreReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StateModule,
    StoreModule.forRoot(coreReducers, {
      initialState: {
        core: initialCoreState,
      },
    }),
    EffectsModule.forRoot([
      CoreEffects,
    ]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
