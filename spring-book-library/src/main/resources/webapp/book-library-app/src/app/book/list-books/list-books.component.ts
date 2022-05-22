import { Component, OnInit } from '@angular/core';
import {Book} from "../Book";
import {Router} from "@angular/router";
import {BookService} from "../book-service.service";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Book[];

  constructor(private router: Router, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.router.navigate(['books/new']);
  };

  viewBook(book) {
    this.router.navigate(['books/' + book.id + '/details']);
  }

  editBook(book) {
    this.router.navigate(['books/' + book.id + '/edit']);
  }

  deleteBook(book) {
    this.bookService.deleteBook(book.id).subscribe(_ => {
      this.getBooks();
    });
  }

}
