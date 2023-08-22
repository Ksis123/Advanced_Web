import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators  } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() signup!: string;

  profileForm = new FormGroup ({
    title: new FormControl(''),
    studentId: new FormControl('', [Validators.required, Validators.pattern('B[0-9]{7}')]),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),

    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });
  get email() { return this.profileForm.get('email'); }

  get studentId() { return this.profileForm.get('studentId'); }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.signup);
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
  }

}
