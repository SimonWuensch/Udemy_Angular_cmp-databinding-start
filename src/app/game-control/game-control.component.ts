import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;

  number: number = 1;
  @Output() tickingNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  onStart() {
    this.interval = setInterval(() => {
      this.tickingNumber.emit(this.number)
      this.number++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval)
  }

}
