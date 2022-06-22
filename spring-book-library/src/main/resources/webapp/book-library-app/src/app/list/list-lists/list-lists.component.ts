import { Component, OnInit } from '@angular/core';
import {List} from "../List";
import {Router} from "@angular/router";
import {ListService} from "../list-service.service";

@Component({
  selector: 'app-list-lists',
  templateUrl: './list-lists.component.html',
  styleUrls: ['./list-lists.component.css']
})
export class ListListsComponent implements OnInit {

  lists: List[];
  filteredLists: List[];
  listFilter: string;

  constructor(private router: Router, private listService: ListService) {
  }

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.listService.getLists().subscribe(data => {
      this.lists = data;
      this.filteredLists = data;
    });
  }

  addList(): void {
    this.router.navigate(['lists/new']);
  };

  viewList(list) {
    this.router.navigate(['lists/' + list.id + '/details']);
  }

  editList(list) {
    this.router.navigate(['lists/' + list.id + '/edit']);
  }

  deleteList(list) {
    this.listService.deleteList(list.id).subscribe(_ => {
      this.getLists();
    });
  }

  filterLists(listFilter: string) {
    this.filteredLists = [];
    for (let i = 0; i < this.lists.length; i++) {
      if (this.lists[i].name.toLocaleLowerCase().includes(listFilter.toLowerCase())) {
        this.filteredLists.push(this.lists[i]);
      }
    }
  }
}
