package com.example.springbooklibrary.controller;

import com.example.springbooklibrary.model.Book;
import com.example.springbooklibrary.model.List;
import com.example.springbooklibrary.model.Note;
import com.example.springbooklibrary.repository.BookRepository;
import com.example.springbooklibrary.repository.ListRepository;
import com.example.springbooklibrary.repository.NoteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200") //since we’re just working locally
public class ListController {

    ListRepository listRepository;
    BookRepository bookRepository;

    public ListController(ListRepository listRepository, BookRepository bookRepository) {
        this.listRepository = listRepository;
        this.bookRepository = bookRepository;
    }

    @GetMapping("/lists")
    public Iterable<List> getLists() {
        return listRepository.findAll();
    }

    @GetMapping("/lists/{id}")
    public ResponseEntity<List> getList(@PathVariable("id") Long id) {
        return new ResponseEntity<>(listRepository.findById(id).get(), HttpStatus.OK);
    }

    @PostMapping("/lists")
    public ResponseEntity<List> addList(@RequestBody List list){
        listRepository.save(list);

        return new ResponseEntity<>(list, HttpStatus.CREATED);
    }

    @PutMapping("/lists/{id}")
    public ResponseEntity<List> editList(@RequestBody List list){
        listRepository.save(list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/lists/{listId}/books/{bookId}")
    public ResponseEntity<List> addBookToList(@PathVariable("listId") Long listId, @PathVariable("bookId") Long bookId) {
        List list = listRepository.findById(listId).get();
        Book book = bookRepository.findById(bookId).get();

        Set<Book> books = list.getBooks();
        if (books == null) {
            books = new HashSet<>();
        }
        books.add(book);

        list.setBooks(books);
        listRepository.save(list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @DeleteMapping("/lists/{id}")
    public ResponseEntity deleteList(@PathVariable("id") Long id) {
        listRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}