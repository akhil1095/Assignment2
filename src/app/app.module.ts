// Name:Akhil Thakkar
// Student ID: 200300312
// Description: This is module page where the pages are routed
// version:1.0.0
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