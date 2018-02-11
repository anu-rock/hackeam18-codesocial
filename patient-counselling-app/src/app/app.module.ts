import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// pages and components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssessmentPage } from '../pages/assessment/assessment';
import { EmdrPage } from '../pages/emdr/emdr';
import { TherapyPage } from '../pages/therapy/therapy';
// Cordova plugins
import { CameraPreview } from '@ionic-native/camera-preview';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
// Providers
import { ApiProvider } from '../providers/api/api';
import { BackgroundCameraProvider } from '../providers/background-camera/background-camera';
import { StorageProvider } from '../providers/storage/storage';
import { VideoTherapyPage } from '../pages/video-therapy/video-therapy';
import { HistoryPage } from '../pages/history/history';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AssessmentPage,
    EmdrPage,
    TherapyPage,
    VideoTherapyPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AssessmentPage,
    EmdrPage,
    TherapyPage,
    VideoTherapyPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StorageProvider,
    NativeStorage,
    BackgroundCameraProvider,
    CameraPreview,
    ApiProvider
  ]
})
export class AppModule { }
