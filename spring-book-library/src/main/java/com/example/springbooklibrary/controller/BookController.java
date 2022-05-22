package com.example.springbooklibrary.controller;

import com.example.springbooklibrary.model.Note;
import com.example.springbooklibrary.repository.BookRepository;
import com.example.springbooklibrary.model.Book;
import com.example.springbooklibrary.repository.NoteRepository;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200") //since we’re just working locally
public class BookController {

    BookRepository bookRepository;
    NoteRepository noteRepository;

    public BookController(BookRepository bookRepository, NoteRepository noteRepository) {
        this.bookRepository = bookRepository;
        this.noteRepository = noteRepository;
    }

    @GetMapping("/books")
    public Iterable<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBook(@PathVariable("id") Long id) {
        return new ResponseEntity<>(bookRepository.findById(id).get(), HttpStatus.OK);
    }

    @PostMapping("/books")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book savedBook = bookRepository.save(book);

        Set<Note> notes = book.getNotes();
        if (notes != null && !notes.isEmpty()) {
            notes.forEach(n -> n.setBook(savedBook));
            noteRepository.saveAll(notes);
        }

        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> editBook(@RequestBody Book book) {
        Book savedBook = bookRepository.save(book);

        Set<Note> notes = book.getNotes();
        if (notes != null && !notes.isEmpty()) {
            notes.forEach(n -> n.setBook(savedBook));
            noteRepository.saveAll(notes);
        }

        return new ResponseEntity<>(savedBook, HttpStatus.OK);
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity deleteBook(@PathVariable("id") Long id) {
        bookRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}