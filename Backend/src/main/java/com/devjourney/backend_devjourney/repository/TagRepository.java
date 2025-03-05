package com.devjourney.backend_devjourney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.Tag;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByName(String name);
}