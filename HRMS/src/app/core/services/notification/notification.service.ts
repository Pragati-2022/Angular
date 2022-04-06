import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

    constructor(private _toastrService: ToastrService) {  }

    onSuccess(message: string | undefined, title: string | undefined){
        this._toastrService.success(message, title);
    }

    onWarning(message: string | undefined, title: string | undefined){
        this._toastrService.warning(message, title);
    }

    onError(message: string | undefined, title: string | undefined){
        this._toastrService.error(message, title);
    }
}