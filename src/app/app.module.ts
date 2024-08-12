import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/task/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { DirectivesTestComponent } from './derectives-test/directives-test.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { AuthComponent } from './derectives-test/auth/auth.component';
import { LearningResourcesComponent } from './derectives-test/learning-resources/learning-resources.component';
import { SaveLinkDirective } from './derectives-test/save-link.directive';
import { AuthDirective } from './derectives-test/auth.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    DirectivesTestComponent,
    UserLayoutComponent,
    AuthComponent,
    LearningResourcesComponent,
    SaveLinkDirective,
    AuthDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
