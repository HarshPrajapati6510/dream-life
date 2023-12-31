import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CalendarModule } from 'angular-calendar';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from '../../material.module';

export const AppsImports = [
  CommonModule,
  RouterModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  NgxPermissionsModule,
  NgApexchartsModule,
  TablerIconsModule,
  DragDropModule,
  NgxPaginationModule,
  HttpClientModule,
  AngularEditorModule,
  CalendarModule,
  MatNativeDateModule,
  NgScrollbarModule,
  DatePipe,
  // CalendarModule.forRoot({
  //   provide: DateAdapter,
  //   useFactory: adapterFactory,
  // }),
];
