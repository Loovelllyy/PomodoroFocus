import { Component, OnInit } from '@angular/core';
// @ts-ignore
import RForm from 'RRForms/RRforms'

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.less']
})
export class RFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(RForm);
  }

}
