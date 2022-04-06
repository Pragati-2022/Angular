import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [`./app.component.css`]
})

export class AppComponent {
    title: 'Practice';

    names = ['pragati', 'sid', 'khushi'];
    name ='';
    gender = '';
    friend = 'khushali  ';

    isModule= false;
    isComponent= false;
    isRoot= false;
    
    constructor() {
        // console.log(this.title.toString().slice(1,9));
    }
}