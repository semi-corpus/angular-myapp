import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

import { TaskProviderService } from './task-provider.service';

// import { Task } from './task';

/*const taskFactory = () => {
  return new Task()
}
*/

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TaskProviderService
    // { provide: TaskProviderService, useClass: TaskProviderService },
    // { provide: TPS, useExisting: TaskProviderService },
    // { provide: Task, useValue: {name: 'coucou'}},
    // { provide: Task, useFactory: taskFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }