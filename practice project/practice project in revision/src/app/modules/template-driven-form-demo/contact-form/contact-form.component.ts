import { Component } from "@angular/core";

@Component({
    selector : 'app-contact-form',
    templateUrl: './contact-form.component.html'
})

export class ContactFormComponent {
    contactMethods = [
        { id: 1, name: 'email' },
        { id: 2, name: 'phone' },
      ];

    person = {
        name : '',
        comment : '',
        isSubscribed : false,
        contactMethod : '',
        gender: '',
        contactByRadio : ''
    };

    log(x){
        console.log(x);
    }

    onSubmit(f){
        f.control.markAllAsTouched();
        console.log(f.value);

        this.person.name = f.value.fname;
        this.person.comment = f.value.comment;
        this.person.isSubscribed = f.value.isSubscribed;
        this.person.contactMethod = f.value.contactMethod;
        this.person.gender = f.value.gender;
        this.person.contactByRadio = f.value.contactByRadio;

        console.log(this.person);
        
    }
}