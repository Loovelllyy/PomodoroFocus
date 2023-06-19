import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit {

  private pomoTimeSec = 0;
  private bufVal = 0;
  private startTime = 0;
  private timer: ReturnType<typeof setInterval> | undefined
  viewTime = '00 : 00';
  isStart = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateViewTime(){
    const minutes = this.pomoTimeSec / 60;
    const seconds = this.pomoTimeSec % 60;
    this.viewTime = `${format(new Date(0, 0, 0, 0, minutes, seconds), 'mm : ss')}`
  }

  updateTimer() {
    this.pomoTimeSec--
    this.bufferValue = 100 - (this.pomoTimeSec / this.startTime * 100);
    this.updateViewTime();
  }

  setTime(min: number) {
    this.pomoTimeSec = min * 60;
    this.viewTime = `${min > 10? min : '0' + min} : 00`;
  }

  setCustomTime(units: 'tenMin' | 'tenSec' | 'min' | 'sec', isAdd: boolean) {
    if (isAdd) {
      switch (units) {
        case "tenMin": {
          this.pomoTimeSec += (10 * 60);
          if (this.pomoTimeSec > 3600) this.pomoTimeSec -= 3600;
          this.updateViewTime();
          return;
        }
        case "tenSec": {
          this.pomoTimeSec += 10;
          this.updateViewTime();
          return;
        }
        case "min": {
          this.pomoTimeSec += 60;
          this.updateViewTime();
          return;
        }
        case "sec": {
          this.pomoTimeSec += 1;
          this.updateViewTime();
          return;
        }
      }
    } else {
      switch (units) {
        case "tenMin": {
          if (this.pomoTimeSec < 600) return;
          this.pomoTimeSec -= (10 * 60);
          this.updateViewTime();
          return;
        }
        case "tenSec": {
          if (this.pomoTimeSec < 10) return;
          this.pomoTimeSec -= 10;
          this.updateViewTime();
          return;
        }
        case "min": {
          if (this.pomoTimeSec < 60) return;
          this.pomoTimeSec -= 60;
          this.updateViewTime();
          return;
        }
        case "sec": {
          if (this.pomoTimeSec < 1) return;
          this.pomoTimeSec -= 1;
          this.updateViewTime();
          return;
        }
      }
    }
  }

  startTimer() {
    if (this.isStart || this.pomoTimeSec === 0) return;
    this.startTime = this.pomoTimeSec;
    this.timer = setInterval(() => {
      if (!this.isStart) return;
      this.updateTimer();
      if (this.pomoTimeSec < 0) {
        clearInterval(this.timer);
        this.viewTime = "00 : 00";
        this.isStart = false;
      }
    }, 1000);
    this.isStart = true;
  }

  endTimer() {
    this.isStart = false;
    if (this.timer) clearInterval(this.timer)
  }

  resetTimer() {
    this.endTimer();
    this.pomoTimeSec = 0;
    this.viewTime = '00 : 00';
  }

  get bufferValue() {
    if (!this.isStart) return 0;
    return this.bufVal;
  }

  set bufferValue(timeNow) {
    this.bufVal = timeNow
  }

}
