import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { provideHttpClient } from '@angular/common/http';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [provideHttpClient(), provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }