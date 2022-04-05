import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BankDetailsComponent } from './bank-details.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BankNameAddComponent } from './bank-name-add/bank-name-add.component'
import { BankDetailsListComponent } from './bank-details-list/bank-details-list.component'

@NgModule({

    declarations : [BankDetailsComponent, BankNameAddComponent, BankDetailsListComponent],
    imports : [CommonModule, ReactiveFormsModule],
    exports: [BankDetailsComponent, BankNameAddComponent, BankDetailsListComponent]
})

export class BankDetailsModule {}  
