package com.example.springbooklibrary.repository;

import com.example.springbooklibrary.model.List;
import org.springframework.data.repository.CrudRepository;

public interface ListRepository extends CrudRepository<List, Long> {
}
