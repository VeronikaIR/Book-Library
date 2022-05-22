import { Component, OnInit } from '@angular/core';
import {Book} from "../Book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book-service.service";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookId: number;
  book: Book;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private bookService: BookService) {
    route.params.subscribe( params => this.bookId = params['id'] );
  }

  editForm: FormGroup;

  ngOnInit(): void {
    this.initBook(this.bookId);
  }

  initBook(id: number) {
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
      this.editForm = this.formBuilder.group({
        id: [this.book.id],
        title: [this.book.title, Validators.required],
        genre: [this.book.genre, Validators.required],
        author: [this.book.author, Validators.required],
        isbn: [this.book.isbn, Validators.required]
      });
    });
  }

  editBook(book) {
    this.router.navigate(['books/' + book.id + '/edit']);
  }

}
