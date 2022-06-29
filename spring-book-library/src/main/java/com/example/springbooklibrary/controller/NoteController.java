package com.example.springbooklibrary.controller;

import com.example.springbooklibrary.model.Note;
import com.example.springbooklibrary.repository.NoteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NoteController {

    NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @GetMapping("/notes")
    public Iterable<Note> getNotes() {
        return noteRepository.findAll();
    }

    @GetMapping("/notes/{id}")
    public ResponseEntity<Note> getNote(@PathVariable("id") Long id) {
        return new ResponseEntity<>(noteRepository.findById(id).get(), HttpStatus.OK);
    }

    @PostMapping("/notes")
    public ResponseEntity<Note> addNote(@RequestBody Note note){
        noteRepository.save(note);

        return new ResponseEntity<>(note, HttpStatus.CREATED);
    }

    @DeleteMapping("/notes/{id}")
    public ResponseEntity deleteNote(@PathVariable("id") Long id) {
        noteRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}