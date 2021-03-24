import { Component, OnInit, SimpleChange } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}
  public title=null;
  public body=null;
  seconds:number=0;
  workTimer: number=0;
  minutes: number=0;
  Name: any;
  Time: number=0;
  startTimer: any;
  repeat:number=0;
  ngOnInit(): void {
  }
 
  
  setDialogProps(props : any){
    this.Name=props.Name || null;
    this.Time=props.Time ;    
    this.title=props.title || null;
    this.body=props.body|| null;
    // console.log(this.Name);
    // console.log(this.Time);
    this.minutes=this.Time;
  this.repeat=this.Time*60;
    console.log(this.repeat);
    this.startTimer=0;
    console.log(this.startTimer);
  }

  // count(){
      
  // //console.log(this.minutes);
  // // console.log(this.minutes);
  // // console.log("console..");
  // // console.log(this.seconds);
  // // this.startTimer=0;
  // // console.log("HTML..");
 
  // }

 start(){
    if(this.startTimer == 0){
          console.log("startTimer..");
          console.log(this.startTimer);
        this.startTimer = setInterval(this.timer(this.minutes, this.seconds),1000,this.repeat)
    } else {
        alert("Timer is already running");
    }
 }

  pause(){
    this.stopInterval();
    this.startTimer=0;
  }

  reset(){
    this.minutes=this.workTimer;
    this.seconds=0;

    this.stopInterval()
      this.startTimer = 0;
  }

  timer(minutes: number, seconds : number) : any{
    console.log(minutes);
    console.log(seconds);
    // console.log("TIMER...");
    console.log(this.startTimer);
    if(this.seconds != 0){
      this.seconds--;
     // console.log("timer..."+this.Time);
  } else if(this.minutes != 0 && this.seconds == 0){
    //console.log("timer1..."+this.minutes);
      this.seconds = 59;
     // console.log(this.seconds);
      this.minutes--;
  }

  if(this.minutes == 0 && this.seconds== 0 ){  
  this.minutes=this.workTimer;
      this.seconds = 0;

            }
  }

  stopInterval(){
    clearInterval(this.startTimer);
  }
}
