import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { TaskdataService } from './shared/taskdata.service';
import { AddtasksComponent } from './task/addtasks.component';
import { routes } from './app.routing';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    AddtasksComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
