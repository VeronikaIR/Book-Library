import { Component, OnInit } from '@angular/core';
import {Book} from "../../book/Book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book/book-service.service";
import {List} from "../List";
import {ListService} from "../list-service.service";

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  listId: number;
  list: List;
  existingBooks: Book[];

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private listService: ListService, private bookService: BookService) {
    route.params.subscribe( params => this.listId = params['id'] );
  }

  editForm: FormGroup;

  ngOnInit(): void {
    this.initList(this.listId);
    this.getBooks();
  }

  onSubmit() {
    this.listService.editList(this.editForm.value)
      .subscribe(data => {
        this.router.navigate(['lists']);
      });
  }

  initList(id: number) {
    this.listService.getList(id).subscribe(data => {
      this.list = data;
      this.editForm = this.formBuilder.group({
        id: [this.list.id],
        name: [this.list.name, Validators.required],
        books: [this.list.books, Validators.required]
      });
    });
  }

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.existingBooks = data;
    });
  }

}
