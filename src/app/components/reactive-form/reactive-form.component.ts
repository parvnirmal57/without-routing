import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  signUpForm = new FormGroup({

    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      city: new FormControl("",[
        Validators.required,
        Validators.minLength(5)
      ]),
      region: new FormControl("", [
        Validators.required,
      ])
    })
  });
    updateProfile(){
      this.signUpForm.patchValue({
        firstName: "Parv",
        lastName: "Nirmal",
        address: {
          street: "Motera"
        }
      });
    }
    onSubmit(){
      console.log(this.signUpForm.value);
    }
}
