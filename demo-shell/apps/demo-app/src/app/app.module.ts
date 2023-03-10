import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import {I18NextModule} from "angular-i18next";
import {getI18nextProvider} from "../../../../i18next.config";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    I18NextModule.forRoot(),
    HttpClientModule
  ],
  providers: [getI18nextProvider(['demo'])],
  bootstrap: [AppComponent],
})
export class AppModule {}
