package com.devjourney.backend_devjourney.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.Reply;

public interface ReplyRepository extends JpaRepository<Reply, Long>{
	List<Reply> findByConversationId (Long conversationId);
}
