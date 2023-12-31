import { Component, OnInit } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';

// components
import { Observable, catchError, map, throwError } from 'rxjs';
import { commonModules } from 'src/app/shared/imports/common-modules';
import { DashboardService } from 'src/app/shared/services/component-services/dashboard.service';
import { AppCustomersComponent } from '../../../components/dashboard1/customers/customers.component';
import { AppEmployeeSalaryComponent } from '../../../components/dashboard1/employee-salary/employee-salary.component';
import { AppMonthlyEarningsComponent } from '../../../components/dashboard1/monthly-earnings/monthly-earnings.component';
import { AppProjectsComponent } from '../../../components/dashboard1/projects/projects.component';
import { AppRevenueUpdatesComponent } from '../../../components/dashboard1/revenue-updates/revenue-updates.component';
import { AppSellingProductComponent } from '../../../components/dashboard1/selling-product/selling-product.component';
import { AppSocialCardComponent } from '../../../components/dashboard1/social-card/social-card.component';
import { AppTopCardsComponent } from '../../../components/dashboard1/top-cards/top-cards.component';
import { AppTopProjectsComponent } from '../../../components/dashboard1/top-projects/top-projects.component';
import { AppWeeklyStatsComponent } from '../../../components/dashboard1/weekly-stats/weekly-stats.component';
import { AppYearlyBreakupComponent } from '../../../components/dashboard1/yearly-breakup/yearly-breakup.component';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [
    ...commonModules,
    TablerIconsModule,
    AppTopCardsComponent,
    AppRevenueUpdatesComponent,
    AppYearlyBreakupComponent,
    AppMonthlyEarningsComponent,
    AppEmployeeSalaryComponent,
    AppCustomersComponent,
    AppSocialCardComponent,
    AppSellingProductComponent,
    AppWeeklyStatsComponent,
    AppTopProjectsComponent,
    AppProjectsComponent,
  ],
  templateUrl: './dashboard1.component.html',
  providers: [DashboardService],
})
export class AppDashboard1Component implements OnInit {
  apiResponseDetails$!: Observable<any>;
  loading$!: Observable<boolean>;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.testAPICall();
  }

  /**
   * Test API call
   */
  testAPICall() {
    this.apiResponseDetails$ = this.dashboardService.testCall();
    this.loading$ = this.apiResponseDetails$.pipe(
      map((response) => {
        return false;
      }),
      catchError(() => {
        return throwError(() => false);
      }),
    );
  }
}
