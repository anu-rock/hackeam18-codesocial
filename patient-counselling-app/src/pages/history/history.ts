import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { PatientHistory } from '../../models/PatientHistory';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  patientHistoryArr: PatientHistory[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageProvider) {
    // this.patientHistoryArr = [{
    //   assessmentDate: Date.now(), faceAnalysisArr: []
    // }];
    console.log("Patient", this.patientHistoryArr.length);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.storage.getItem('patientHistory').then((history) => {
      this.patientHistoryArr = history;
    })
      .catch(ex => console.log("No data in history", ex));
  }


}
