import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { TopBarComponent } from './common/top-bar/top-bar.component';
import { FooterComponent } from './common/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { initialState, reducers } from './store/reducers';
import { CommonModule } from '@angular/common';

const storeDevToolsOptions: StoreDevtoolsOptions = {
  name: 'Canban',
  maxAge: 10,
  logOnly: true
};

@NgModule({
  declarations: [

    AppComponent,
    TopMenuComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      initialState,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true
      }
    }),
    StoreDevtoolsModule.instrument(storeDevToolsOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
