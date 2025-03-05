package com.devjourney.backend_devjourney.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.core.support.RepositoryProxyPostProcessor;
import org.springframework.stereotype.Service;

import com.devjourney.backend_devjourney.model.Post;
import com.devjourney.backend_devjourney.repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
    private PostRepository postRepository;
	
	public List<Post> getAllPosts(){
		return postRepository.findAll();
	}
	
	public Post getPostById(Long id) {
		return postRepository.findById(id).orElseThrow(()-> new RuntimeException("Post não identificado!"));
	}
	
	public Post createPost(Post post) {
		return postRepository.save(post);
	}
	
	public Post updatePost(Long id ,Post postDetails) {
		Post post = getPostById(id);
		post.setTitle(postDetails.getTitle());
		post.setContent(postDetails.getContent());
		return postRepository.save(post);
	}
	
	public void deletePost(Long id) {
		postRepository.deleteById(id);
	}
	
	public List<Post> getPostByTag(String Tagname){
		return postRepository.findByTagName(Tagname);
	}
	
	public List<Post> getPostByUser(Long userId){
		return postRepository.findByUserId(userId);
	}
}
