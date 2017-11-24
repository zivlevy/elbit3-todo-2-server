import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ActionListComponent} from './action-list/action-list.component';
import {ActionItemComponent} from './action-item/action-item.component';
import {ActionInputComponent} from './action-input/action-input.component';
import {TotalListComponent} from './total-list/total-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TotalItemComponent} from "./total-item/total-item.component";
import { TestComponent } from './test/test.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './todo/todo.component';
import {TodoService} from "./services/todo.service";
import { MakeRedDirective } from './directives/make-red.directive';

@NgModule({
    declarations: [
        AppComponent,
        ActionListComponent,
        ActionItemComponent,
        ActionInputComponent,
        TotalListComponent,
        TotalItemComponent,
        TestComponent,
        TodoComponent,
        MakeRedDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
