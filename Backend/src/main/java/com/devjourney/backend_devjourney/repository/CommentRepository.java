package com.devjourney.backend_devjourney.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{
	List<Comment> findByPostId(Long postId);
	List<Comment> findByUserId(Long userId);	
}
