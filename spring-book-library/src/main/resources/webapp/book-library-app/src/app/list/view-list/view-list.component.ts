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

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private listService: ListService, private bookService: BookService) {
    route.params.subscribe( params => this.listId = params['id'] );
  }

  ngOnInit(): void {
    this.initList(this.listId);
  }

  initList(id: number) {
    this.listService.getList(id).subscribe(data => {
      this.list = data;
    });
  }

}
