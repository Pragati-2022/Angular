import { Component } from "@angular/core";

@Component({
    selector: 'app-attribute-demo',
    templateUrl: './attribute-demo.component.html',
    styleUrls : ['./attribute-demo.component.css']
})

export class AttributeDemoComponent {
    blueClass = false;
    num = 0;
    name = 'pragati';
    step = 'step1';

    getColor(val){
        if(val < 10){
            return 'lessThan10';
        }
        else if(val >= 10 && val <=15){
            return 'between1015'
        }
        else {
            return 'greaterthan15'
        }
    }
    getColorWithNgStyle(val){
        if(val < 10){
            return 'rgb(46, 184, 11)';
        }
        else if(val >= 10 && val <=15){
            return 'rgb(899, 23, 11)'
        }
        else {
            return 'rgb(46, 67, 11)'
        }
    }
}

