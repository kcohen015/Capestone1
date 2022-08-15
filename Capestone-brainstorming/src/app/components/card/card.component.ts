import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  goals!: Goal[];

  id!: number;
  public goal!: Goal;
  fund!: Fund;
  g!: number;

  constructor(
    private goalService: GoalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getGoals();
    this.loadChart();
  }

  goalDetails(id: number) {
    this.router.navigate(['goal-details', id]);
  }

  private getGoals() {
    this.goalService.getGoalsList().subscribe((data) => {
      this.goals = data;
    });
  }

  //donut

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      { data: [], label: 'funded' },
      { data: [], label: 'left' },

      // { data: [ 250, 130, 70 ], label: 'Series C' }
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: true,
  };
  loadChart() {
      while ( g < this.goals.length) {
        this.goalService;
        this.goalService.getGoalsList().subscribe((data) => {
          this.goals = data;
      for (let i of data) {
        this.doughnutChartDatasets[i.id].data.push(i.fund);
        this.doughnutChartDatasets[i.id].data.push(i.amount - i.fund);
        console.log(this.doughnutChartDatasets);
      }}
      

      this.chart.update();
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
