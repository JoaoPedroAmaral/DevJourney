package com.devjourney.backend_devjourney.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.Challenger;

public interface ChallengeRepository extends JpaRepository<Challenger, Long>{
	List<Challenger> findByUserId (Long userId);
}
