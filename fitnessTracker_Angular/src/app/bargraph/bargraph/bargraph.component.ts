import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {  ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css']
})
export class BargraphComponent implements OnInit {

  // // associateId: any ;
  // // responseDetails: any;
  // // // skills: Array<Skills> = [];
  // // skillNames = [];
  // // skillLevels=[];
  // barChartOptions: ChartOptions = {
  // responsive: true,


  // };
  // // barChartLabels: Label[] = this.skillNames;
  // // barChartType: ChartType = 'bar';
  // // barChartLegend = true;
  // // barChartPlugins = [];

  // // barChartData: ChartDataSets[] = [
  // //   { data: this.skillLevels, label: 'strong skills' },

  // // ];
  // userId: number;
  // // // 
  // // constructor(private service: AssociateSkillsService,private route: ActivatedRoute) {
    
  // }

  ngOnInit(): void {
  //   // this.associateId= this.route.queryParams.subscribe(params => {
  //   //   this.userId = +params['userId'];
  //   //   console.log(this.userId);
  //   //   console.log(this.associateId);
  //   // });
  //   //this.associateId=this.route.snapshot.data['id'];
  // //   this.route.paramMap.subscribe(params => { 
  // //     this.associateId = params.get('id'); 
  // //     console.log(this.associateId);
  // //  });
  // //   //this.associateId=this.route.snapshot.paramMap.get("id");
   
  // //   this.displayBarGraph();
  }

  // displayBarGraph() {
  //   // let responseData = this.service.displayById(this.associateId);
  //   // responseData.subscribe((response) => {
  //   //   this.responseDetails = response;
  //   //   this.skills = this.responseDetails.skills;
  //   //   for (let i = 0; i < this.skills.length; i++) {
  //   //     console.log(this.skills[i].skillName);
  //   //     this.skillNames.push(this.skills[i].skillName);
  //   //     this.skillLevels.push(this.skills[i].skillLevel);
  //   //   }
  //   //   this.skillLevels.push(0);

  //   });

  // }


}

