import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

}
