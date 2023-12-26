// import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { ModalCampaignComponent } from './Components/modal-campaign/modal-campaign.component';
import { LoginPage } from './Pages/login/login.page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations:
    [
      AppComponent,
      ModalCampaignComponent,
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    LoginPage,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    SecureStorage
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
