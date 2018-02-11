import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { ScoreHisotry } from '../../models/ScoreHistory';
import { TherapyPage } from '../therapy/therapy';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  therapy = { lastDate: '2018-02-11' };
  constructor(public navCtrl: NavController, private storage: StorageProvider, private plt: Platform) {
    this.storage.getItem('therapyHistory').then(history => this.therapy = history).catch(ex => {
      let therapy = { lastDate: Date.now() };
      this.storage.setItem('therapyHistory', therapy);
    })
  }

  ionViewDidEnter() { }

  /**
   * Tap handler for StartTherapy
   */
  public tapStartTherapy() {
    console.log("tapped start therapy");
    this.navCtrl.push(TherapyPage);
  }

  /**
   * Tap handler for Therapy History page
   */
  public tapTherapyHistoryButton() {
    this.navCtrl.push(HistoryPage);
  }
}
