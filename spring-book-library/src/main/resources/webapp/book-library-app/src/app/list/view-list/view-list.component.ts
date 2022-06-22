import { Component, OnInit } from '@angular/core';
import {List} from "../List";
import {Book} from "../../book/Book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ListService} from "../list-service.service";
import {BookService} from "../../book/book-service.service";

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  listId: number;
  list: List;

  filteredBooks: Book[];
  bookFilter: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private listService: ListService, private bookService: BookService) {
    route.params.subscribe( params => this.listId = params['id'] );
  }

  ngOnInit(): void {
    this.initList(this.listId);
  }

  initList(id: number) {
    this.listService.getList(id).subscribe(data => {
      this.list = data;
      this.filteredBooks = this.list.books;
    });
  }

  viewBook(book) {
    this.router.navigate(['books/' + book.id + '/details']);
  }

  filterBooks(bookFilter: string) {
    this.filteredBooks = [];
    for (let i = 0; i < this.list.books.length; i++) {
      if (this.list.books[i].title.toLocaleLowerCase().includes(bookFilter.toLowerCase())) {
        this.filteredBooks.push(this.list.books[i]);
      }
    }
  }
}
