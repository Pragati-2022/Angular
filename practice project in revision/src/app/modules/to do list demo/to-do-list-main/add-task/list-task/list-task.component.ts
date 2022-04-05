import { Component, Input } from "@angular/core";
import { ITask } from "src/app/core/models/task";
import { ToDoListService } from "src/app/core/services/to-do-list/to-do-list.service";

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html'
})

export class ListTaskComponent {

    @Input() getTask : ITask;

    constructor(public _toDoListService: ToDoListService){
    }

    onStart(){
        this.getTask.status = 'pending';
        this._toDoListService.updateStatus(this.getTask);
    }

    onComplete(){
        if( this.getTask.status === 'pending'){
            this.getTask.status = 'completed';
            this._toDoListService.updateStatus(this.getTask);
        }
        else if(this.getTask.status === 'completed'){
            let deleteTaskIndex = this._toDoListService.tasks.findIndex((e) => e === this.getTask)
    
            this._toDoListService.deleteTask(deleteTaskIndex);
        }
    }
}