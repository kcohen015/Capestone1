import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  subscription!: Subscription;
  @Input() goal!: Goal;

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id!: number;
  goals!: Goal[];
  date!: String;

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: number = 0;
  public secondsToDday: number = 0;
  public minutesToDday: number = 0;
  public hoursToDday: number = 0;
  public daysToDday: number = 0;

  private getTimeDifference() {
    let goalDate = this.goal.goalDate;
    let gdyear = goalDate.getFullYear();
    console.log(gdyear);
    let gdmonth = goalDate.getMonth();
    let gdday = goalDate.getDay();
    let gd = new Date('');
    gd.setMonth(gdmonth);
    gd.setFullYear(gdyear);
    gd.setDate(gdday);
    console.log('gd=' + gd);

    // console.log('goalDate= ' + goalDate);
    // console.log(gd.getMilliseconds);
    this.timeDifference = gd.getMilliseconds() - new Date().getTime();
    console.log('gd= ' + gd);
    console.log('todayDate= ' + new Date());
    console.log('goal= ' + gd.getTime());
    console.log('now= ' + new Date().getTime());
    console.log('difference' + this.timeDifference);
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor(
      // (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
      Math.floor((timeDifference % (1000 * 60)) / 1000)
    );
    this.minutesToDday = Math.floor(
      // (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
      //   this.SecondsInAMinute
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.hoursToDday = Math.floor(
      // (timeDifference /
      //   (this.milliSecondsInASecond *
      //     this.minutesInAnHour *
      //     this.SecondsInAMinute)) %
      //   this.hoursInADay
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.daysToDday = Math.floor(
      // timeDifference /
      //   (this.milliSecondsInASecond *
      //     this.minutesInAnHour *
      //     this.SecondsInAMinute *
      //     this.hoursInADay)
      timeDifference / (1000 * 60 * 60 * 24)
    );
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.goal = new Goal(0, '', '', 0, new Date(''), 0);
    this.goalService.getGoalById(this.id).subscribe((data) => {
      console.log(data);
      this.goal = data;
    });
    this.subscription = interval(1000).subscribe(() => {
      this.getTimeDifference();
    });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
