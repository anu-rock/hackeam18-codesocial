import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';

const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'front',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
};

@Injectable()
export class BackgroundCameraProvider {

  constructor(public http: HttpClient, private camera: CameraPreview) {
    console.log('Hello BackgroundCameraProvider Provider');
  }

  /**
   * Start Device Camera
   */
  public startCamera() {
    return this.camera.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
        return true
      },
      (err) => {
        console.log("cam preview err", err)
        return false
      });
  }

  /**
   * Take picture from camera.
   * Converts Image data from camera to Blob to 
   * send to server as Octed-stream/binary
   */
  public takePicture() {
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }
    let picture: string;
    return this.camera.takePicture(pictureOpts).then((imageData) => {
      // picture = 'data:image/jpeg;base64,' + imageData;
      console.log("Image data", imageData);
      // Manipulating received image data to blob
      let byteCharsOfImageData = atob(imageData);
      let byteNumbers = new Array(byteCharsOfImageData.length);
      for (let i = 0; i < byteCharsOfImageData.length; i++) {
        byteNumbers[i] = byteCharsOfImageData.charCodeAt(i);
      }
      let byteArr = new Uint8Array(byteNumbers);
      let blobOfImg = new Blob([byteArr], { type: 'application/octet-stream' });
      return blobOfImg;
    }, (err) => {
      console.log(err);
      picture = 'assets/img/test.jpg';
      let blob = new Blob();
      return blob;
    });
  }
}
