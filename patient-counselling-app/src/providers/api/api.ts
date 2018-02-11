import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { FaceAnalysisResp } from '../../models/FaceAnalysisResp';

// Feel free to use any Cognitive service and call accordingly
// and put your api and key below.
const APIURL = "https://eastus.api.cognitive.microsoft.com/face/v1.0/detect";
const KEY = "af6ed2b5788a4d1889e76a06951c62e1";

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  /**
   * Analyse user's face and capture the emotions
   * needed for analysis.
   */
  public analyseFace(img: Blob): Promise<FaceAnalysisResp> {
    const params = {
      "returnFaceId": "true",
      "returnFaceLandmarks": "false",
      "returnFaceAttributes": "age,gender,smile,glasses,emotion",
    };
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/octet-stream');
    header = header.append('Ocp-Apim-Subscription-Key', KEY);
    const opts = { headers: header, params: params };
    return this.http.post(APIURL, img, opts)
      .toPromise()
      .then((response: FaceAnalysisResp[]) => {
        console.log("Face response", response);
        return response[0];
      })
      .catch(err => {
        console.log("Error", err);
        return Promise.reject(null);
      });
  }

}
