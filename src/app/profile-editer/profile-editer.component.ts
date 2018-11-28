import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  templateUrl: './profile-editer.component.html',
  styleUrls: ['./profile-editer.component.css']
})
export class ProfileEditerComponent implements OnInit {

  profileForm: FormGroup;
  errorMessage: string;

  validationMessages = {
    required: 'this field is required',
    minlength: 'minium length is 5'
  }

  get lastName() { return this.profileForm.get('lastName'); }


  get address() {
    return this.profileForm.get('address') as FormArray;
  }

  addAdderss() {
    this.address.push(this.buildAdress())
  }

  buildAdress(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: [''],
      zip: ['']
    })
  }


  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'balu',
      address: [{
        street: '1/2378'
      }]
    })
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: [''],
      address: this.fb.array([this.buildAdress()]),
      aliases: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    })
    const firstName = this.profileForm.get('firstName');
    firstName.valueChanges.pipe(debounceTime(500)).subscribe(
      value => this.setMessage(firstName)
    )
  }

  setMessage(c: AbstractControl) {
    this.errorMessage = ''
    if ((c.dirty || c.touched) && c.errors) {
      Object.keys(c.errors).map(
        key => { this.errorMessage += this.validationMessages[key] }
      ).join('')
    }
    console.log(this.errorMessage)
  }

}
