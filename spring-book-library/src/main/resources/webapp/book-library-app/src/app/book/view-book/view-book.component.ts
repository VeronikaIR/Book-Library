import { Component, OnInit } from '@angular/core';
import {Book} from "../Book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book-service.service";
import {Note} from "../Note";
import {NoteService} from "../note-service.service";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookId: number;
  book: Book;
  newNote: Note;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private bookService: BookService, private noteService: NoteService) {
    route.params.subscribe( params => this.bookId = params['id'] );
  }

  editForm: FormGroup;

  ngOnInit(): void {
    console.log("vvv")
    this.initBook(this.bookId);
    this.newNote = new Note();
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

  editBook(book) {
    this.router.navigate(['books/' + book.id + '/edit']);
  }

  addBookNote() {
    console.log("a")
    this.bookService.addBookNote(this.bookId, this.newNote)
      .subscribe(data => {
         window.location.reload();
      });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id)
      .subscribe(data => {
        window.location.reload()
      })
  }
}
