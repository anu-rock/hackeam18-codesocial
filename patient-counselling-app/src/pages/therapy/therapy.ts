import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { EmdrPage } from '../emdr/emdr';
import { AssessmentPage } from '../assessment/assessment';
import { VideoTherapyPage } from '../video-therapy/video-therapy';

@Component({
  selector: 'page-therapy',
  templateUrl: 'therapy.html',
})
export class TherapyPage {

  therapies: Array<string> = [];

  constructor(public navCtrl: NavController, public storage: StorageProvider, public navParams: NavParams, private modalCtrl: ModalController) {
    // this.storage.getItem('therapies').then(therapies => this.therapies = therapies);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TherapyPage');
    this.startTherapy();
  }

  ionViewDidLeave() {
    // this.saveTherapyState();
  }


  /**
   * Start User Therapy
   */
  private startTherapy() {
    //start video therapy
    this.startVideoTherapy();
    // mark therapy1 as complete
    //start edmr therapy
    // mark therpay completed
  }

  /**
   * Start User assessment
   */
  private startAssessment() {
    this.navCtrl.setRoot(AssessmentPage);
  }

  /**
   * Start video therapy
   */
  private startVideoTherapy(): Promise<boolean> {
    this.navCtrl.setRoot(VideoTherapyPage);
    return Promise.resolve(true);
  }
}
