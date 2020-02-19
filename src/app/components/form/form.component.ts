import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // Export submit event
  @Output() submitInvestment = new EventEmitter();

  // Validate form
  form = new FormGroup({
    type: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

  // Get inputs FormConstrol
  get type(): any { return this.form.get('type'); }
  get value(): any { return this.form.get('value'); }
  get date(): any { return this.form.get('date'); }

  // Executed when a form is submitted
  submit() {
    if (this.form.valid) {
      const payload = {
        id: Math.floor(Math.random() * 99) + 1,
        type: this.form.value.type,
        value: Number(this.form.value.value),
        date: Number(this.form.value.date),
      };

      this.submitInvestment.emit(payload);
    }
  }
}
