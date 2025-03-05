package com.devjourney.backend_devjourney.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devjourney.backend_devjourney.model.User;
import com.devjourney.backend_devjourney.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public User getUserById(Long userId) {
		return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
	}
	
	public User createUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}
	
	public User updateUser (Long id, User userDetails) {
		User user = getUserById(id);
		user.setUsername(userDetails.getUsername());
		user.setEmail(userDetails.getEmail());
		if(userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
			user.setPassword(passwordEncoder.encode(userDetails.getPassword()));
		}
		return userRepository.save(user);
		
	}
	
	public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
	
}
