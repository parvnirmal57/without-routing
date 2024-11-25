import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
isActive= false;
isHighlighted= false;

toggleActive(){
  this.isActive= !this.isActive;
}
toggleHighlight(){
  this.isHighlighted= !this.isHighlighted;  
}
textColor='blue';
fontSize='25';
isVisible=true;
toggleVisibility(){
  this.isVisible= !this.isVisible
}
items=['*','for','For']
color: string='yellow';
}

