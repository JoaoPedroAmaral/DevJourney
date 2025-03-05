package com.devjourney.backend_devjourney.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.Conversation;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {
	List<Conversation> findByCategory (String category);
} 
