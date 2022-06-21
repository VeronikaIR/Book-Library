import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book-service.service";
import {Book} from "../Book";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private bookService: BookService) {
    route.params.subscribe( params => this.bookId = params['id'] );
  }

  editForm: FormGroup;

  ngOnInit(): void {
    this.initBook(this.bookId);
  }

  onSubmit() {
    this.bookService.editBook(this.editForm.value)
      .subscribe(data => {
        this.router.navigate(['books']);
      });
  }

  initBook(id: number) {
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
      this.editForm = this.formBuilder.group({
        id: [this.book.id],
        title: [this.book.title, Validators.required],
        genre: [this.book.genre, Validators.required],
        author: [this.book.author, Validators.required],
        isbn: [this.book.isbn, Validators.required],
        coverUrl: [this.book.coverUrl, Validators.required]
      });
    });
  }

}
