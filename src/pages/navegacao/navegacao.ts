import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConteudoPage } from '../conteudo/conteudo';

/**
 * Generated class for the NavegacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navegacao',
  templateUrl: 'navegacao.html',
})
export class NavegacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavegacaoPage');
  }
 
  goToOtherPageConteudo(){ 
    this.navCtrl.push(ConteudoPage);
}

}
