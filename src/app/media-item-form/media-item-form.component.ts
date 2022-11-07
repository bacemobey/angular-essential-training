import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mv-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      meduim: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });

  }

  yearValidator(control: FormControl) {
    if(control.value.trim().length === 0) return null;

    const year = parseInt(control.value, 10);
    const minYear = 1850;
    const maxYear = 2025;
    if (year >= minYear && year <= maxYear) {
      return null;
    }
    return { year: {
      min: minYear,
      max: maxYear
    } };
    


  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }

}
