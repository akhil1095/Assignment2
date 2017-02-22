import { Events, NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Item } from '../../providers/todo-service';

@Component({
  selector: 'AddTodo',
 templateUrl: 'AddTodo.html'
})
export class TodoDetail {

  private item: Item;
  private newTask: boolean;

  constructor( public alertControl: AlertController, public events: Events, public navControl: NavController, navParams: NavParams) {
    if (navParams.data != null) {
      this.item = navParams.data["currentItem"];
      this.newTask = navParams.data["newTask"];
    }}

// Add Task
  private addItem() {
    if (this.item.title === "") {
      let prompt = this.alertControl.create({
        title: 'Please give a title to the Task',
        inputs: [{
            name: 'title',
            placeholder: 'details.'
          },
        ],
        buttons: [{
            text: 'Cancel',
            handler: data => { }
          },
          {text: 'Add task',
            handler: data => {
              if (data.title === "") {
                this.addItem();}
              else {
                this.item.title = data.title;
                this.events.publish('item:added', this.item);
                this.navControl.pop();
              }}}]});
      prompt.present();
    }
    else {
      this.events.publish('item:added', this.item);
      this.navControl.pop();
    }}      
  // Navigation
  goBack() {
    this.navControl.pop();
  }
  }