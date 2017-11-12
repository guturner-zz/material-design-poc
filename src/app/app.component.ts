import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userInfoForm: FormGroup; // To be instantiated via the FormBuilder factory.

  constructor(private fb: FormBuilder) { // Injects a FormBuilder
    this.createForm();
  }

  createForm() {
    // Replaces:
    /*
      this.userInfoForm = new FormGroup({
        name: new FormControl()
      });
    */
    this.userInfoForm = this.fb.group({
      // Multiple validators can be passed via a list:
      name: ['', [
          Validators.required, 
          Validators.pattern(/^[^1-9]{3,}$/)
        ]]
    });
  }
}
