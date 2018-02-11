webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__therapy_therapy__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, storage, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.plt = plt;
        this.therapy = { lastDate: '2018-02-11' };
        this.storage.getItem('therapyHistory').then(function (history) { return _this.therapy = history; }).catch(function (ex) {
            var therapy = { lastDate: Date.now() };
            _this.storage.setItem('therapyHistory', therapy);
        });
    }
    HomePage.prototype.ionViewDidEnter = function () { };
    /**
     * Tap handler for StartTherapy
     */
    HomePage.prototype.tapStartTherapy = function () {
        console.log("tapped start therapy");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__therapy_therapy__["a" /* TherapyPage */]);
    };
    /**
     * Tap handler for Therapy History page
     */
    HomePage.prototype.tapTherapyHistoryButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__history_history__["a" /* HistoryPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Counsel Mate\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item no-lines text-center>\n\n    <button ion-button large round (tap)="tapStartTherapy()">\n      Start Therapy\n    </button>\n\n  </ion-item>\n  <ion-item>\n    <ion-icon name="checkmark" item-start></ion-icon>\n    Last Therapy On\n    <ion-badge item-end>{{therapy.lastDate|date}}</ion-badge>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-item text-center no-lines>\n    <button ion-button clear (tap)="tapTherapyHistoryButton()">\n      Therapy History\n    </button>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_background_camera_background_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AssessmentPage = (function () {
    // to be decided on image description
    // triggerImage: Array<number> = [1, 2, 3, 4];
    function AssessmentPage(navCtrl, navParams, bgCam, api, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bgCam = bgCam;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.imgArr = [];
        this.showNextButton = false;
        this.faceAnalysis = [];
        this.imgArr = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
    AssessmentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.slides.lockSwipeToNext(true);
        this.slides.lockSwipeToPrev(true);
        this.bgCam.startCamera().then(function (success) {
            _this.slideChanged();
        })
            .catch(function (fail) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); });
        // setTimeout(() => this.showNextButton = true, 3000);
    };
    AssessmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssessmentPage');
    };
    AssessmentPage.prototype.ionViewDidLeave = function () {
        console.log("Page leaving");
    };
    /**
     * Events for slide change event
     */
    AssessmentPage.prototype.slideChanged = function () {
        var _this = this;
        // get current slide index for further processing
        console.log("Slide change event");
        setTimeout(function () {
            _this.showNextButton = true;
            var currentIndex = _this.slides.getActiveIndex();
            console.log('Current index is', currentIndex);
            // const imageVal = this.imgArr[currentIndex];
            // if (this.triggerImage.indexOf(imageVal) !== -1) {
            var loading = _this.loadingCtrl.create({ content: 'Great Progress' });
            loading.present();
            _this.startFaceAnalysis(loading);
        }, 3000);
        // }
    };
    /**
     * Tap handler for next slide button
     */
    AssessmentPage.prototype.tapNextHandler = function () {
        var _this = this;
        this.showNextButton = false;
        if (this.slides.isEnd()) {
            console.log("Thnks for assessment");
            var loading_1 = this.loadingCtrl.create({ content: "Thanks for Assessment." });
            loading_1.present();
            var therapy = { lastDate: Date.now() };
            this.storage.setItem('therapyHistory', therapy).then(function (success) {
                loading_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            })
                .catch(function (ex) { return loading_1.dismiss(); });
        }
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext();
        this.slides.lockSwipeToNext(true);
    };
    /**
     * Start facial analysis to get required attributes
     * for face analysis.
     */
    AssessmentPage.prototype.startFaceAnalysis = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            var imgData, faceAnalysisData, newHistory, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.bgCam.takePicture()];
                    case 1:
                        imgData = _a.sent();
                        return [4 /*yield*/, this.api.analyseFace(imgData)];
                    case 2:
                        faceAnalysisData = _a.sent();
                        loading.dismiss();
                        this.faceAnalysis.push(faceAnalysisData);
                        // Check if assessment has comoleted/interrupted
                        if (this.analyseFace(faceAnalysisData)) {
                            console.log("Assessment ended as person still has stress");
                            newHistory = { assessmentDate: Date.now(), faceAnalysisArr: this.faceAnalysis };
                            this.storage.setItem('patientHistory', newHistory);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        loading.dismiss();
                        console.log("Error in startFaceAnalysis api ", ex_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check if the person has fear, anger or sadness for a particular image
     * @param faceAnalysisData
     */
    AssessmentPage.prototype.analyseFace = function (faceAnalysisData) {
        // if fear is greater than 50 or anger is greater than 70 or sadness is greater than 90
        // return true
        return faceAnalysisData.faceAttributes.emotion.anger > 0.7 || faceAnalysisData.faceAttributes.emotion.fear > 0.5 || faceAnalysisData.faceAttributes.emotion.sadness > 0.7 ? true : false;
    };
    /**
     * Shuffle image arrayss
     * @param array
     */
    AssessmentPage.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], AssessmentPage.prototype, "slides", void 0);
    AssessmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assessment',template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/assessment/assessment.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Assessment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let image of imgArr">\n      <img data-src="assets/assessment/image{{image}}.jpg">\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n<ion-footer>\n  <ion-item no-lines clear text-center>\n    <button ion-button *ngIf="showNextButton" full clear (tap)="tapNextHandler()">Next</button>\n    <img src="assets/icon/wait.svg" *ngIf="!showNextButton" alt="Waiting for image perception" width="50" height="50" />\n  </ion-item>\n\n</ion-footer>'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/assessment/assessment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_background_camera_background_camera__["a" /* BackgroundCameraProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]])
    ], AssessmentPage);
    return AssessmentPage;
}());

//# sourceMappingURL=assessment.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assessment_assessment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_therapy_video_therapy__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TherapyPage = (function () {
    function TherapyPage(navCtrl, storage, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.therapies = [];
        // this.storage.getItem('therapies').then(therapies => this.therapies = therapies);
    }
    TherapyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TherapyPage');
        this.startTherapy();
    };
    TherapyPage.prototype.ionViewDidLeave = function () {
        // this.saveTherapyState();
    };
    /**
     * Start User Therapy
     */
    TherapyPage.prototype.startTherapy = function () {
        //start video therapy
        this.startVideoTherapy();
        // mark therapy1 as complete
        //start edmr therapy
        // mark therpay completed
    };
    /**
     * Start User assessment
     */
    TherapyPage.prototype.startAssessment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__assessment_assessment__["a" /* AssessmentPage */]);
    };
    /**
     * Start video therapy
     */
    TherapyPage.prototype.startVideoTherapy = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__video_therapy_video_therapy__["a" /* VideoTherapyPage */]);
        return Promise.resolve(true);
    };
    TherapyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-therapy',template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/therapy/therapy.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Therapy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/therapy/therapy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TherapyPage);
    return TherapyPage;
}());

//# sourceMappingURL=therapy.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundCameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var cameraPreviewOpts = {
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
var BackgroundCameraProvider = (function () {
    function BackgroundCameraProvider(http, camera) {
        this.http = http;
        this.camera = camera;
        console.log('Hello BackgroundCameraProvider Provider');
    }
    /**
     * Start Device Camera
     */
    BackgroundCameraProvider.prototype.startCamera = function () {
        return this.camera.startCamera(cameraPreviewOpts).then(function (res) {
            console.log(res);
            return true;
        }, function (err) {
            console.log("cam preview err", err);
            return false;
        });
    };
    /**
     * Take picture from camera.
     * Converts Image data from camera to Blob to
     * send to server as Octed-stream/binary
     */
    BackgroundCameraProvider.prototype.takePicture = function () {
        var pictureOpts = {
            width: 1280,
            height: 1280,
            quality: 85
        };
        var picture;
        return this.camera.takePicture(pictureOpts).then(function (imageData) {
            // picture = 'data:image/jpeg;base64,' + imageData;
            console.log("Image data", imageData);
            // Manipulating received image data to blob
            var byteCharsOfImageData = atob(imageData);
            var byteNumbers = new Array(byteCharsOfImageData.length);
            for (var i = 0; i < byteCharsOfImageData.length; i++) {
                byteNumbers[i] = byteCharsOfImageData.charCodeAt(i);
            }
            var byteArr = new Uint8Array(byteNumbers);
            var blobOfImg = new Blob([byteArr], { type: 'application/octet-stream' });
            return blobOfImg;
        }, function (err) {
            console.log(err);
            picture = 'assets/img/test.jpg';
            var blob = new Blob();
            return blob;
        });
    };
    BackgroundCameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */]])
    ], BackgroundCameraProvider);
    return BackgroundCameraProvider;
}());

//# sourceMappingURL=background-camera.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Feel free to use any Cognitive service and call accordingly
// and put your api and key below.
var APIURL = "https://eastus.api.cognitive.microsoft.com/face/v1.0/detect";
var KEY = "af6ed2b5788a4d1889e76a06951c62e1";
var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    /**
     * Analyse user's face and capture the emotions
     * needed for analysis.
     */
    ApiProvider.prototype.analyseFace = function (img) {
        var params = {
            "returnFaceId": "true",
            "returnFaceLandmarks": "false",
            "returnFaceAttributes": "age,gender,smile,glasses,emotion",
        };
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        header = header.append('Content-Type', 'application/octet-stream');
        header = header.append('Ocp-Apim-Subscription-Key', KEY);
        var opts = { headers: header, params: params };
        return this.http.post(APIURL, img, opts)
            .toPromise()
            .then(function (response) {
            console.log("Face response", response);
            return response[0];
        })
            .catch(function (err) {
            console.log("Error", err);
            return Promise.reject(null);
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoTherapyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emdr_emdr__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoTherapyPage = (function () {
    function VideoTherapyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VideoTherapyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoTherapyPage');
        // Playing a video.
        // this.videoPlayer.openVideo('8yBclu-KoaQ');
    };
    /**
     * Tap handler for next therapy
     */
    VideoTherapyPage.prototype.tapNextTherapyHandler = function () {
        this.startEMDRTherapy();
    };
    /**
     * Start EMDR therapy
     */
    VideoTherapyPage.prototype.startEMDRTherapy = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__emdr_emdr__["a" /* EmdrPage */]);
    };
    VideoTherapyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-therapy',template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/video-therapy/video-therapy.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Video Therapy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item text-center>\n    <video src="assets/video/harvey.3gp" autoplay controls="false" preload></video>\n  </ion-item>\n\n  <ion-item no-lines text-center>\n    <button ion-button large (tap)="tapNextTherapyHandler()">Next Therapy</button>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/video-therapy/video-therapy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VideoTherapyPage);
    return VideoTherapyPage;
}());

//# sourceMappingURL=video-therapy.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmdrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assessment_assessment__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmdrPage = (function () {
    function EmdrPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    EmdrPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.context = this.myCanvas.nativeElement.getContext('2d');
        this.drawCanvasForEmdr();
        // Set time out for moving to assessment page right after the therpy.
        setTimeout(function () {
            var toast = _this.toastCtrl.create({ message: 'Moving for Assessment' });
            toast.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__assessment_assessment__["a" /* AssessmentPage */]).then(function (success) { return toast.dismiss(); });
        }, 30000);
    };
    ;
    EmdrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmdrPage');
    };
    /**
     * Draw canvas for EMDR therapy using a ball
     */
    EmdrPage.prototype.drawCanvasForEmdr = function () {
        var ctx = this.context;
        //create te container that will hold the boincing balls.
        var container = {
            x: 0,
            y: 0,
            width: window.outerWidth,
            height: window.innerHeight
        };
        //create the array of circles that will be animated
        var circles = [{
                x: 100,
                y: 50,
                r: 15,
                vx: 8,
                vy: 10,
                color: 100
            }];
        /**
         * Animate the scene for ball motion
         */
        function animate() {
            //draw the container
            ctx.fillStyle = "#FFF";
            ctx.fillRect(container.x, container.y, container.width, container.height);
            //loop throughj the circles array
            for (var i = 0; i < circles.length; i++) {
                //draw the circles
                ctx.fillStyle = 'hsl(' + circles[i].color + ', 100%, 50%)';
                ctx.beginPath();
                ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
                ctx.fill();
                // animate  circles
                if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
                    circles[i].vx = -circles[i].vx;
                }
                if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
                    circles[i].vy = -circles[i].vy;
                }
                circles[i].x += circles[i].vx;
                // circles[i].y += circles[i].vy
            }
            setTimeout(function () { return requestAnimationFrame(animate); }, 50);
        }
        setTimeout(function () { return requestAnimationFrame(animate); }, 50);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EmdrPage.prototype, "myCanvas", void 0);
    EmdrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emdr',template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/emdr/emdr.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>EMDR Therapy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <canvas #myCanvas></canvas>\n</ion-content>\n<ion-footer>\n  <ion-item no-lines clear>\n    Please follow the moving ball with your eyes.\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/emdr/emdr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], EmdrPage);
    return EmdrPage;
}());

//# sourceMappingURL=emdr.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.patientHistoryArr = [];
        // this.patientHistoryArr = [{
        //   assessmentDate: Date.now(), faceAnalysisArr: []
        // }];
        console.log("Patient", this.patientHistoryArr.length);
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HistoryPage');
        this.storage.getItem('patientHistory').then(function (history) {
            _this.patientHistoryArr = history;
        })
            .catch(function (ex) { return console.log("No data in history", ex); });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/history/history.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Progress</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="patientHistoryArr.length>0">\n    <ion-item *ngFor="let history of patientHistoryArr">\n      <p>{{history.assessmentDate|date}}</p>\n      <div *ngFor="let emotion of history.faceAnalysisArr">\n        <p>Anger:{{emotion.anger}}</p>\n        <p>Sadness:{{emotion.sadness}}</p>\n        <p>Fear:{{emotion.fear}}</p>\n        <p>Neutral:{{emotion.neutral}}</p>\n        <p>Happiness:{{emotion.happiness}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <!-- <ion-item no-lines text-ecnter *ngIf="patientHistoryArr.length<==0"> -->\n    <ion-chip>\n      <ion-icon name="heart" color="danger"></ion-icon>\n      <ion-label>No History Available</ion-label>\n    </ion-chip>\n  <!-- </ion-item> -->\n</ion-content>'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


// disable console log
// console.log = function(){};
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_assessment_assessment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_emdr_emdr__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_therapy_therapy__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_api__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_background_camera_background_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_storage_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_video_therapy_video_therapy__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_history_history__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// pages and components





// Cordova plugins




// Providers





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_assessment_assessment__["a" /* AssessmentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_emdr_emdr__["a" /* EmdrPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_therapy_therapy__["a" /* TherapyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_video_therapy_video_therapy__["a" /* VideoTherapyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_history_history__["a" /* HistoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_assessment_assessment__["a" /* AssessmentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_emdr_emdr__["a" /* EmdrPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_therapy_therapy__["a" /* TherapyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_video_therapy_video_therapy__["a" /* VideoTherapyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_history_history__["a" /* HistoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_14__providers_background_camera_background_camera__["a" /* BackgroundCameraProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_13__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shivamsingh/Documents/Projects/counsel/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/shivamsingh/Documents/Projects/counsel/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * An isotropic storgae library built on top of local storage and
 * Native Storage plugin for Ionic application.
 * Author: @sshivamsngh
 */
var StorageProvider = (function () {
    function StorageProvider(nativeStorage, plt) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.plt = plt;
        this.mobile = false;
        console.log('Hello StorageProvider Provider');
        var platDetail = this.plt.platforms();
        console.log("platforms:", platDetail);
        platDetail.forEach(function (x) {
            if (x === 'mobile')
                _this.mobile = true;
        });
    }
    /**
     * Set item in local storage
     * @param key
     * @param value
     */
    StorageProvider.prototype.setItem = function (key, value) {
        console.log("mobile plt", this.mobile);
        if (this.mobile) {
            return this.nativeStorage.setItem(key, value);
        }
        else {
            try {
                var res = localStorage.setItem(key, JSON.stringify(value));
                return Promise.resolve('success');
            }
            catch (ex) {
                return Promise.reject(ex);
            }
        }
    };
    /**
     * Get item from local storage
     * @param key
     */
    StorageProvider.prototype.getItem = function (key) {
        console.log("mobile plt", this.mobile);
        if (this.mobile) {
            return this.nativeStorage.getItem(key);
        }
        else {
            try {
                var res = JSON.parse(localStorage.getItem(key));
                return (res === null || res === undefined) ? Promise.reject('Not Found') : Promise.resolve(res);
            }
            catch (ex) {
                return Promise.reject(ex);
            }
        }
    };
    /**
     * Clear storage
     * @param key
     */
    StorageProvider.prototype.clear = function (key) {
        console.log("mobile plt", this.mobile);
        if (this.mobile) {
            return this.nativeStorage.remove(key);
        }
        else {
            try {
                var res = localStorage.removeItem(key);
                return Promise.resolve('success');
            }
            catch (ex) {
                return Promise.reject(ex);
            }
        }
    };
    /**
     * Clear  all items from storage
     */
    StorageProvider.prototype.clearAll = function () {
        console.log("mobile plt", this.mobile);
        if (this.mobile) {
            return this.nativeStorage.clear();
        }
        else {
            try {
                var res = localStorage.clear();
                return Promise.resolve(res);
            }
            catch (ex) {
                return Promise.reject(ex);
            }
        }
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map