import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

    constructor(private toastrService: ToastrService) {  }

    onSuccess(message: string | undefined, title: string | undefined){
        this.toastrService.success(message, title);
    }

    onWarning(message: string | undefined, title: string | undefined){
        this.toastrService.warning(message, title);
    }

    onError(message: string | undefined, title: string | undefined){
        this.toastrService.error(message, title);
    }
}