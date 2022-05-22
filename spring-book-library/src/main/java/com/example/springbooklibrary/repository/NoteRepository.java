package com.example.springbooklibrary.repository;

import com.example.springbooklibrary.model.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Long> {
}
