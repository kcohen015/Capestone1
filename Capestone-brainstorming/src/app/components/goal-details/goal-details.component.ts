import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';
import { Prediction } from 'src/app/models/Prediction';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss'],
})
export class GoalDetailsComponent implements OnInit {
  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id!: number;
  public goal!: Goal;
  prediction!: Prediction;
  goals!: Goal[];
  fund!: Fund;
  depositAmount!: number;
  originalAmount!: number;
  withdrawalAmount!: number;
  predictMonths!: number;
  expectedDate!: Date;
  width!: number;
  display!: any;
  disable!: boolean;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.goal = new Goal(0, '', '', 0, new Date(''), 0);
    this.fund = new Fund('', 0);
    this.goalService.getGoalById(this.id).subscribe((data) => {
      console.log(data);
      this.goal = data;
    });
    this.update();
  }

  public addFund(newFunds: number) {
    //this.goal.amount =(this.goal.amount)-Number(newFunds);
    this.goal.fund += Number(newFunds);
    console.log(this.goal.fund);
    this.saveGoal();
    this.update();
  }
  public withdrawFund(newFund: number) {
    this.goal.fund -= Number(newFund);
    console.log(this.goal.fund);
    this.saveGoal();
    this.update();
  }
  deleteGoal(id: number) {
    this.goalService.deleteGoal(id).subscribe((data) => {
      console.log(data);
      this.getGoals();
      this.router.navigate(['/dashboard']);
    });
  }
  saveGoal() {
    this.goalService.updateGoal(this.id, this.goal).subscribe((data: any) => {
      console.log(data);
      this.goal.id;
      this.goal.title;
      console.log(this.goal.title);
      this.goal.description;
      console.log(this.goal.description);
      this.goal.amount;
      console.log(this.goal.amount);
      this.goal.goalDate;
      console.log(this.goal.goalDate);
      this.goal.fund;
      console.log(this.goal.fund);
    });
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  private getGoals() {
    this.goalService.getGoalsList().subscribe((data) => {
      this.goals = data;
    });
  }

  goToUpdate(id: number) {
    this.router.navigate(['update-goal', id]);
  }

  //progressbar
  public update() {
    var element = document.getElementById('progress-bar');
    console.log('element' + element);
    console.log('goal amount= ' + this.goal.amount);
    console.log('goal fund= ' + this.goal.fund);
    this.width = (this.goal.fund / this.goal.amount) * 100;
    console.log('width=' + this.width);
    if (element != null) {
      console.log(this.width);
      element.style.width = this.width + '%';
    }
  }

  //Predictions
  // getMonths() {
  //   let predictMonths = this.originalAmount / this.depositAmount;
  //   console.log(predictMonths);
  //   return predictMonths;
  // }

  // getExpectedDate() {
  //   let d = this.goal.goalDate;
  //   console.log('d=' + d);
  //   let expectedDate = new Date(d.setMonth(d.getMonth() + this.predictMonths));
  //   console.log(expectedDate);
  //   return expectedDate;
}
