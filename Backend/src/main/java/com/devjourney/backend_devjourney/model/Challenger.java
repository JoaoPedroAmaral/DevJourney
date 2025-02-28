package com.devjourney.backend_devjourney.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Data;

@	Data
@Entity
public class Challenger {
		
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String description;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String solution;
	
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private User user;
	
    @Column(nullable = false)
	private LocalDateTime created_at;
}
