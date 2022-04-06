import { Component, Input } from "@angular/core";
import { BankDetailsService } from "src/app/core/services/decorators-demo/bank-details.service";

@Component({
    selector : '[app-bank-details-list]',
    templateUrl : 'bank-details-list.component.html'
})

export class BankDetailsListComponent {

    @Input() getBankDetails;
    @Input() getTotalAmount;
    
    constructor(public _bankDetailsService: BankDetailsService){
        console.log(this.getTotalAmount);
    }
}