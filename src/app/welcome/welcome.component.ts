import { Component, OnInit } from '@angular/core';
import { GlycemieserviceService } from '../glycemieservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Glycemie } from '../glycemie.model';
import { Chart,registerables } from 'chart.js';
import { DatePipe } from '@angular/common';
Chart.register(...registerables);

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [DatePipe]
})
export class WelcomeComponent {

  glycemie!:Glycemie[];
  valeur:number[] =[];
 jours:string[]=[];








  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('day'));
this.getresult(id);




    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //  this.getresult(this.route.snapshot.paramMap.get('id'));



  }
  constructor( private datePipe: DatePipe,private route:ActivatedRoute,private router:Router,private glycemieservice:GlycemieserviceService) {

  }


  getresult(id:number){


    this.glycemieservice.result(id).subscribe(Response=>{


      this.glycemie=Response

      console.log(this.glycemie);




    console.log(this.glycemie.map((item)=>item.jours));
      this.jours=this.glycemie.map( (item)=>this.datePipe.transform(item.jours) as string)
      console.log(this.jours);

     this.valeur=this.glycemie.filter((item)=>item!=undefined).map((item1)=>item1.valeur as number)
     console.log(this.valeur);















     new Chart("myChart", {
      type: "line",
      data: {
        labels: this.jours,

        datasets: [{
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: this.valeur
        }]
      },
    });

    },Error=>{
      console.log(Error);


    });

  }






}
