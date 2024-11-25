import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
name: string="pipes"
date= new Date()
employee: any={
  name: 'Parv',
  team: 'Web',
  company: 'Infinium',

}
}
