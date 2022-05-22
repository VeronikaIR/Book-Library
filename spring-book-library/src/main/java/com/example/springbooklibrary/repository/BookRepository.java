package com.example.springbooklibrary.repository;

import com.example.springbooklibrary.model.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {
}
