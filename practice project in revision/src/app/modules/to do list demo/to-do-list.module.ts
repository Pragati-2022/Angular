import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddTaskComponent } from "./to-do-list-main/add-task/add-task.component";
import { ListTaskComponent } from "./to-do-list-main/add-task/list-task/list-task.component";
import { ToDoListMainComponent } from "./to-do-list-main/to-do-list-main.component";

@NgModule({
    declarations: [AddTaskComponent, ToDoListMainComponent, ListTaskComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [AddTaskComponent, ToDoListMainComponent, ListTaskComponent]
})

export class ToDoListModule { }