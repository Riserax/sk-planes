import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
