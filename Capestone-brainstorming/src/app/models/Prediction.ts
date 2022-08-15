export class Prediction {
  deposit!: number; //whatever number they deposit into the goal details page, use here.
  goalAmount!: number; //goal.amount
  months!: number; //at that deposit/per month it will take ___ months to reach your goal
  expectedDate!: Date; //expected completion date based on above information.
}
