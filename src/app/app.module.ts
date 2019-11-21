import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BotoesPage } from '../pages/botoes/botoes';
import { NavegacaoPage } from '../pages/navegacao/navegacao';
import { ConteudoPage } from '../pages/conteudo/conteudo';
import { BuscaPage } from '../pages/busca/busca';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    BotoesPage, 
    NavegacaoPage, 
    ConteudoPage, 
    BuscaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    BotoesPage,
    NavegacaoPage,
    ConteudoPage,
    BuscaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
