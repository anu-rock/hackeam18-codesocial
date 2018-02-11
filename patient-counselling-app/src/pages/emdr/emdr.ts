import { ViewChild, Component, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AssessmentPage } from '../assessment/assessment';
import { Loading } from 'ionic-angular/components/loading/loading';

@Component({
  selector: 'page-emdr',
  templateUrl: 'emdr.html',
})
export class EmdrPage implements AfterViewInit {

  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ngAfterViewInit() {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.drawCanvasForEmdr();

    // Set time out for moving to assessment page right after the therpy.
    setTimeout(() => {
      let toast = this.toastCtrl.create({ message: 'Moving for Assessment' });
      toast.present();
      this.navCtrl.setRoot(AssessmentPage).then((success) => toast.dismiss())
    }, 30000)
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmdrPage');
  }

  /**
   * Draw canvas for EMDR therapy using a ball
   */
  public drawCanvasForEmdr() {

    let ctx: CanvasRenderingContext2D = this.context;

    //create te container that will hold the boincing balls.
    let container = {
      x: 0,
      y: 0,
      width: window.outerWidth,
      height: window.innerHeight
    };
    //create the array of circles that will be animated
    let circles = [{
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
        ctx.fill()

        // animate  circles
        if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
          circles[i].vx = -circles[i].vx;
        }

        if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
          circles[i].vy = -circles[i].vy;
        }

        circles[i].x += circles[i].vx
        // circles[i].y += circles[i].vy
      }

      setTimeout(() => requestAnimationFrame(animate), 50)
    }
    setTimeout(() => requestAnimationFrame(animate), 50)
  }

}
