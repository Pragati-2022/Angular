import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { DemoModule } from './modules/demo.module';
import { FilterPipe } from './core/pipes/filter-pipe.pipe'
import { PrependNamePipe } from './core/pipes/prepend-name.pipe'
import { PrependNamePipe2 } from './core/pipes/prepend-name2.pipe'
import { AddUnderscorePipe } from './core/pipes/add-underscore.pipe'
import { Demo3Service } from './core/services/demo3-4/demo3.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
    declarations: [AppComponent, FilterPipe, PrependNamePipe, PrependNamePipe2, AddUnderscorePipe],
    imports: [BrowserModule, DemoModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
    bootstrap: [AppComponent],
    providers: [Demo3Service]
})

export class AppModule{ }