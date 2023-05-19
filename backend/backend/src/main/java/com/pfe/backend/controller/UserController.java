package com.pfe.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pfe.backend.entity.User;
import com.pfe.backend.service.UserService;

@RestController()
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(path="user/{id}")
	public User getUser(@PathVariable long id) {
		return userService.getUser(id);
	}
	
	@GetMapping(path = "/users")
	public List<User> getUsers(){
		return userService.getUsers();
	}
	
	@PostMapping(path="/add")
	public User addUser(@RequestBody User user) {
		return this.userService.addUser(user);
	}
	
	@PutMapping(path="/update/{id}")
	public User updateUser(User user,@PathVariable long id) {
		return this.userService.editUser(user, id);
	}
	
	@DeleteMapping(path="/delete/{id}")
	public void deleteUser(@PathVariable long id) {
		this.userService.deleteUser(id);
	}
}
