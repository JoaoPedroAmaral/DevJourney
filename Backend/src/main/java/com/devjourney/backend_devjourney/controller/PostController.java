package com.devjourney.backend_devjourney.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devjourney.backend_devjourney.model.Post;
import com.devjourney.backend_devjourney.service.PostService;

@RestController
@RequestMapping("api/posts")
public class PostController {
	
	 @Autowired
	    private PostService postService;

	    @GetMapping
	    public List<Post> getAllPosts() {
	        return postService.getAllPosts();
	    }

	    @GetMapping("/{id}")
	    public Post getPostById(@PathVariable Long id) {
	        return postService.getPostById(id);
	    }

	    @PostMapping
	    public Post createPost(@RequestBody Post post) {
	        return postService.createPost(post);
	    }

	    @PutMapping("/{id}")
	    public Post updatePost(@PathVariable Long id, @RequestBody Post postDetails) {
	        return postService.updatePost(id, postDetails);
	    }

	    @DeleteMapping("/{id}")
	    public void deletePost(@PathVariable Long id) {
	        postService.deletePost(id);
	    }

	    @GetMapping("/tag/{tagName}")
	    public List<Post> getPostsByTag(@PathVariable String tagName) {
	        return postService.getPostsByTag(tagName);
	    }

	    @GetMapping("/search")
	    public List<Post> searchPosts(@RequestParam String title) {
	        return postService.getPostsByTitle(title);
	    }
	
}
