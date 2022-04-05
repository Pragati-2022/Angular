import { Injectable } from "@angular/core";
import { IAccount } from "../../models/account";

@Injectable({
    providedIn : 'root'
})

export class BankDetailsService {
    
    bankDetails : IAccount[];

    addBankDetails(bankDetail){
        this.bankDetails =JSON.parse(localStorage.getItem('bankDetails'));

        if(!this.bankDetails)  this.bankDetails = [];

        this.bankDetails.push(bankDetail);

        localStorage.setItem('bankDetails', JSON.stringify(this.bankDetails));
    }

}
