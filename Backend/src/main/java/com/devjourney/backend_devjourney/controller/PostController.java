package com.devjourney.backend_devjourney.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devjourney.backend_devjourney.model.Post;
import com.devjourney.backend_devjourney.service.PostService;

@RestController
@RequestMapping("api/posts")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@GetMapping("/{id}")
	public Post getPostById(@PathVariable Long id) {
		return postService.getAllPosts();
	}
}
