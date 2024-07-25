import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalExpenses: number;
  monthlyBreakdown: string;
  topCategories: string;

  constructor() {
    // Example initializations
    this.totalExpenses = 1234.56;
    this.monthlyBreakdown = 'Rent, Food, Entertainment';
    this.topCategories = 'Food, Transportation, Utilities';
  }

  ngOnInit(): void {
    // Initialize component data here, e.g., fetch from a service
  }
}
