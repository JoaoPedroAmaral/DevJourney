package com.devjourney.backend_devjourney.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.devjourney.backend_devjourney.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{
	List<Project> findByUserId (Long userid);
}
