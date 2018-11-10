import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 tasks : task[] =[
    {taskName: "arrumar cama", done: true},
    {taskName: "fazer comida", done: true},
    {taskName: "tomar banho", done: false},
    {taskName: "arrumar a casa", done: false},
 ];
 add(taskName, done){
  let task: task = {taskName: taskName, done: done};
  this.tasks.push(task);
   console.log(task);
 }
 del(index){
   this.tasks.splice(index , 1);
 }

}

class task {
  taskName: string;
  done:boolean;

}
