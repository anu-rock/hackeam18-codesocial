import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams, Slides, LoadingController, Loading } from 'ionic-angular';
import { BackgroundCameraProvider } from '../../providers/background-camera/background-camera';
import { ApiProvider } from '../../providers/api/api';
import { FaceAnalysisResp } from '../../models/FaceAnalysisResp';
import { HomePage } from '../home/home';
import { LoadedModule } from 'ionic-angular/util/module-loader';
import { StorageProvider } from '../../providers/storage/storage';
import { PatientHistory } from '../../models/PatientHistory';

@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html',
})
export class AssessmentPage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  imgArr: Array<number> = [];
  showNextButton: boolean = false;
  faceAnalysis: FaceAnalysisResp[] = [];
  // to be decided on image description
  // triggerImage: Array<number> = [1, 2, 3, 4];

  constructor(public navCtrl: NavController, public navParams: NavParams, private bgCam: BackgroundCameraProvider, private api: ApiProvider, private loadingCtrl: LoadingController, private storage: StorageProvider) {
    this.imgArr = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  ngOnInit() {

    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
    this.bgCam.startCamera().then((success) => {
      this.slideChanged();
    })
      .catch(fail => this.navCtrl.setRoot(HomePage));
    // setTimeout(() => this.showNextButton = true, 3000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentPage');
  }

  ionViewDidLeave() {
    console.log("Page leaving");
  }

  /**
   * Events for slide change event
   */
  private slideChanged() {
    // get current slide index for further processing
    console.log("Slide change event");
    setTimeout(() => {
      this.showNextButton = true;
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
      // const imageVal = this.imgArr[currentIndex];
      // if (this.triggerImage.indexOf(imageVal) !== -1) {
      const loading = this.loadingCtrl.create({ content: 'Great Progress' });
      loading.present();
      this.startFaceAnalysis(loading);
    }
      , 3000);

    // }
  }

  /**
   * Tap handler for next slide button
   */
  private tapNextHandler() {
    this.showNextButton = false;
    if (this.slides.isEnd()) {
      console.log("Thnks for assessment");
      let loading = this.loadingCtrl.create({ content: "Thanks for Assessment." });
      loading.present();
      let therapy = { lastDate: Date.now() };
      this.storage.setItem('therapyHistory', therapy).then((success) => {
        loading.dismiss();
        this.navCtrl.setRoot(HomePage);
      })
        .catch(ex => loading.dismiss());
    }
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
    this.slides.lockSwipeToNext(true);
  }

  /**
   * Start facial analysis to get required attributes
   * for face analysis. 
   */
  private async startFaceAnalysis(loading: Loading) {
    try {
      const imgData: Blob = await this.bgCam.takePicture();
      const faceAnalysisData = await this.api.analyseFace(imgData);
      loading.dismiss();
      this.faceAnalysis.push(faceAnalysisData);
      // Check if assessment has comoleted/interrupted
      if (this.analyseFace(faceAnalysisData)) {
        console.log("Assessment ended as person still has stress");
        let newHistory: PatientHistory = { assessmentDate: Date.now(), faceAnalysisArr: this.faceAnalysis };
        this.storage.setItem('patientHistory', newHistory);
        this.navCtrl.setRoot(HomePage);
      };
    }
    catch (ex) {
      loading.dismiss();
      console.log("Error in startFaceAnalysis api ", ex);
    }
  }

  /**
   * Check if the person has fear, anger or sadness for a particular image
   * @param faceAnalysisData 
   */
  private analyseFace(faceAnalysisData: FaceAnalysisResp) {
    // if fear is greater than 50 or anger is greater than 70 or sadness is greater than 90
    // return true
    return faceAnalysisData.faceAttributes.emotion.anger > 0.7 || faceAnalysisData.faceAttributes.emotion.fear > 0.5 || faceAnalysisData.faceAttributes.emotion.sadness > 0.7 ? true : false;
  }

  /**
   * Shuffle image arrayss
   * @param array 
   */
  private shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
