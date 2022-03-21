import { Component, OnInit } from '@angular/core';
import { LoveService } from 'src/app/services/love.service';

@Component({
  selector: 'app-love-calc',
  templateUrl: './love-calc.component.html',
  styleUrls: ['./love-calc.component.css']
})
export class LoveCalcComponent implements OnInit {

  firstName: string = '';
  secondName: string = '';
  percentage: number = 0;
  constructor(private loveService: LoveService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.firstName) {
      alert('Please enter First Name');
      return
    }

    if(!this.secondName) {
      alert('Please enter Second Name');
      return
    }

    const newNames = {
      firstName : this.firstName,
      secondName: this.secondName
    }

    this.loveService.calcLove(newNames).subscribe(response => {
      this.percentage = response.percentage
      
    });

  
  }

  clear(){
    this.firstName = '';
    this.secondName = '';
    this.percentage = 0;
  }

}
