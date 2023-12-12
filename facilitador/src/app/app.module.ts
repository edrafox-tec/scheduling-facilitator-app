import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCampaignComponent } from './Components/modal-campaign/modal-campaign.component';

@NgModule({
  declarations:
    [
      AppComponent,
      ModalCampaignComponent,
    ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SecureStorage],
  bootstrap: [AppComponent],
})
export class AppModule { }
