import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AddBookComponent} from "./book/add-book/add-book.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {ListBooksComponent} from "./book/list-books/list-books.component";
import { HomeComponent } from './home/home.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { ViewBookComponent } from './book/view-book/view-book.component';
import { ListListsComponent } from './list/list-lists/list-lists.component';
import { AddListComponent } from './list/add-list/add-list.component';
import { EditListComponent } from './list/edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListBooksComponent,
    HeaderComponent,
    HomeComponent,
    EditBookComponent,
    ViewBookComponent,
    ListListsComponent,
    AddListComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
