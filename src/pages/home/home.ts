import { TodoDetail } from '../AddTodo/AddTodo';
import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { Item } from '../../providers/todo-service';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class ToDo {
  private items: Item[] =
  [new Item("Midterm prep", "Go through the slides and videos", false),
  new Item("groceries", "Go to fresh-co", true),
  new Item("Haircut", "Go to the mall for a clean Haircut", false)];
  constructor(public navCtrl: NavController, public events: Events) {
    events.subscribe('item:added', (item) => {
      this.items.push(item);
    });
  }
  // Add function
  addNew() {
    this.navCtrl.push(TodoDetail, {
      currentItem: new Item("", "", false),
      newItem: true
    });
  }
  //Open add page
  openAdd(item: Item) {
    this.navCtrl.push(TodoDetail, {
      currentItem: item,
      newItem: false
    });
  }
  getCompleted() {
    let counter: number = 0;
    for (let i = 0; i < this.items.length; ++i) {
      if (this.items[i].completed)
        counter++;
    }
  }
  getTextDecoration(truth: boolean) {
    return (truth) ? "line-through" : "none";
  }
}