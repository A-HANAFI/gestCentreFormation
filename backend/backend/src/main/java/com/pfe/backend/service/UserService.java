package com.pfe.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.backend.entity.User;
import com.pfe.backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public User getUser(long id) {
		return this.userRepository.findById(id).get();
	}
	
	public List<User> getUsers() {
		List<User> users = new ArrayList<User>();
		userRepository.findAll().forEach(user -> users.add(user));
		return users;
	}
	
	public User addUser(User user) {
		return this.userRepository.save(user);
	}
	
	public User editUser(User user , long id) {
		return this.userRepository.save(user);
	}
	
	public void deleteUser(long id ) {
		this.userRepository.deleteById(id);
	}

}
