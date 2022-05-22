import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ListService} from "../list-service.service";
import {Book} from "../../book/Book";
import {BookService} from "../../book/book-service.service";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  books: Book[];

  constructor(private formBuilder: FormBuilder, private router: Router, private listService: ListService, private bookService: BookService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      selectedBook: ['', Validators.required]
    });
    this.getBooks();
  }


  onSubmit() {
    this.listService.addList(this.addForm.value)
      .subscribe(data => {
        console.log("aa")
        this.router.navigate(['lists']);
      });
  }

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

}
