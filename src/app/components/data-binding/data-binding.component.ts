import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  src="https://media.glassdoor.com/sql/3599410/infinnium-squarelogo-1663666247935.png";
  bool='true';
  isActive=true;
  textColor='red';
  onClick(){
    alert('Event Biding')
  }
  title: string="One way data biding";
  username: string="";

}
