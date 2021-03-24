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
            starter: any;
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
            this.startTimer=0;
            //console.log(this.startTimer);
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
          if(this.startTimer === 0){
                console.log("startTimer..");
                //console.log(this.startTimer);
                
              this.startTimer = setInterval(this.timer(this.minutes, this.seconds),1000)
              
          } else {
              alert("Timer is already running");
          }
      }

        pause(){
            this.stopInterval();
            this.startTimer=0;
        }

        reset(){
            this.minutes=this.Time;
            this.seconds=0;

            this.stopInterval()
            this.startTimer = 0;
        }

        timer(minute: number, second : number) : any {
              console.log(minute);
              console.log(second);
              console.log(this.startTimer);
            
              // console.log("TIMER...");
                if(second != 0){
                  second--;
                this.seconds=second;
                console.log("timer..."+this.seconds);
            } else if(minute != 0 && second == 0){
              //console.log("timer1..."+this.minutes);
              second=59;
                this.seconds = second;
              // console.log(this.seconds);
                this.minutes=--minute;
            }
              
            if(this.minutes == 0 && this.seconds== 0 ){  
            this.minutes=0;
            this.seconds=0;
            clearInterval(this.startTimer);
            alert("Woohooooo...... Workout Finished :) :)");
              }

        }

        stopInterval(){
          clearInterval(this.startTimer);
        }
}