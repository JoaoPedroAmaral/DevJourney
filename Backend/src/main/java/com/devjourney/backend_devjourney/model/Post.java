package com.devjourney.backend_devjourney.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;


@	Data
@Entity
public class Post {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String content;
	
	@ManyToOne
	@JoinColumn(name = "author_id", nullable = false)
	private User author;
	
	@ManyToMany
	@JoinTable(name = "post_tags",
	joinColumns = @JoinColumn(name = "post_id"),
	inverseJoinColumns = @JoinColumn(name = "tag_id")
			)
	private List<Tag> tags;
	
	@Column(nullable = false)
	private LocalDateTime created_at;
	
	@Column(nullable = false)
	private LocalDateTime update_at;
}
