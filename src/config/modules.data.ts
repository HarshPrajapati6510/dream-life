import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/app/material.module';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const modules = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  TablerIconsModule.pick(TablerIcons),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
  NgScrollbarModule,
  ToastrModule.forRoot(),
  ToastNoAnimationModule.forRoot(),
  CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  }),
  NgxPermissionsModule.forRoot(),
];
