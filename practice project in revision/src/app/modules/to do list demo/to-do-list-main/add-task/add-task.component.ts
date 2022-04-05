import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ITask } from "src/app/core/models/task";
import { ToDoListService } from "src/app/core/services/to-do-list/to-do-list.service";
import { ToDoListCustomValidator } from "src/app/core/validators/to-do-list-validators/to-do-list-custom.validator";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {
    
    addTaskForm: FormGroup;
    tasks : ITask[];
    taskDetail: ITask;
    isSubmitted = false;
    isAddTask = false;

    constructor(public formBuilder : FormBuilder, public _toDoListService : ToDoListService){  
        this.tasks = _toDoListService.tasks;
    }

    ngOnInit(){
        this.initializeForm();
    }

    initializeForm(){
        this.addTaskForm = this.formBuilder.group({
            task : ['', Validators.required],
            date : ['', [Validators.required, ToDoListCustomValidator.greaterThenNow]]
        })
    }

    get _addTaskForm(){
        return this.addTaskForm.controls;
    }

    onSubmit(){
        this.isSubmitted = true;

        if(this.addTaskForm.valid){

            this.taskDetail = {
                id : uuidv4(),
                task : this._addTaskForm.task.value,
                date : this._addTaskForm.date.value,
                currentDate: new Date()
            }
            console.log(this.taskDetail);
            this.tasks = this._toDoListService.tasks;
            this._toDoListService.addTask(this.taskDetail);

            alert('successfully added');
            this.initializeForm();
            this.isSubmitted = false;
        }
    }
}