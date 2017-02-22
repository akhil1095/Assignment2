import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToDo } from '../pages/home/home';
import { TodoDetail } from '../pages/AddTodo/AddTodo';
@NgModule({
  declarations: [
    MyApp,
    ToDo,
    TodoDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDo,
    TodoDetail
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }