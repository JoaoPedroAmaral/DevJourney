package com.devjourney.backend_devjourney.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
}
