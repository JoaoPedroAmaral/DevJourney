package com.devjourney.backend_devjourney.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Tag {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true, nullable = false)
	private String name;
	
}
