import { CourseInfoComponent } from './courses/course-info.component';
import { Error404Component } from './404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.componet';
import { CourseListComponent } from './courses/course-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
          {
            path: 'courses', component: CourseListComponent
          },
          {
            path: 'course/info/:id', component: CourseInfoComponent
          },
          {
            path: ' ', redirectTo: 'courses', pathMatch: 'full'
          },

          {
            path: '**', component: Error404Component
          }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
