package com.devjourney.backend_devjourney.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devjourney.backend_devjourney.model.Post;

public interface PostRepository extends JpaRepository<Post, Long>{
	List<Post> findByTagName(String name);
	List<Post> findByUserId(Long id);
}
