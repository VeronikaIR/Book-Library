import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddBookComponent} from "./book/add-book/add-book.component";
import {ListBooksComponent} from "./book/list-books/list-books.component";
import {HomeComponent} from "./home/home.component";
import {EditBookComponent} from "./book/edit-book/edit-book.component";
import {ViewBookComponent} from "./book/view-book/view-book.component";
import {ListListsComponent} from "./list/list-lists/list-lists.component";
import {AddListComponent} from "./list/add-list/add-list.component";
import {EditListComponent} from "./list/edit-list/edit-list.component";
import {ViewListComponent} from "./list/view-list/view-list.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: 'books/new', component: AddBookComponent},
  {path: 'books/:id/edit', component: EditBookComponent},
  {path: 'books/:id/details', component: ViewBookComponent},
  {path: 'books', component: ListBooksComponent},
  {path: 'lists', component: ListListsComponent},
  {path: 'lists/new', component: AddListComponent},
  {path: 'lists/:id/edit', component: EditListComponent},
  {path: 'lists/:id/details', component: ViewListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
