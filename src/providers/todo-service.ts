export class Item {

  public title: string;
  public description: string;
  public completed: boolean;
 
  constructor(title: string, description: string, completed: boolean) {

    this.completed = completed;
    
    this.title = title;
    
    this.description = description;
    }
}