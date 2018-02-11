import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmdrPage } from '../emdr/emdr';


@Component({
  selector: 'page-video-therapy',
  templateUrl: 'video-therapy.html',
})
export class VideoTherapyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoTherapyPage');
    // Playing a video.
    // this.videoPlayer.openVideo('8yBclu-KoaQ');
  }

  /**
   * Tap handler for next therapy
   */
  private tapNextTherapyHandler() {
    this.startEMDRTherapy();
  }
  /**
   * Start EMDR therapy
   */
  private startEMDRTherapy() {
    this.navCtrl.setRoot(EmdrPage);
  }
}
