import { Injectable } from "@angular/core";
import { ITask } from "../../models/task";

@Injectable({
    providedIn: 'root'
})
export class ToDoListService {
    tasks : ITask[] = [];

    constructor(){
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    addTask(task: ITask){
        
        if(!this.tasks){
            this.tasks = []
        }
        
        this.tasks.push(task);
        this.tasks.sort((D1, D2) => {
            return <any>new Date(D2.currentDate) - <any>new Date(D1.currentDate);
          });
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    deleteTask(index){
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    updateStatus(task){
        let findIndex = this.tasks.findIndex((e) => e.id === task.id);

        this.tasks[findIndex].status = task.status;
        this.tasks.sort((D1, D2) => {
            return <any>new Date(D2.currentDate) - <any>new Date(D1.currentDate);
          });
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}