import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.less']
})
export class TodoCardComponent implements OnInit {

  @Input() date: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
