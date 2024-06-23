package com.corpozulia.counting.service;


import com.corpozulia.counting.models.User;
import com.corpozulia.counting.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
    private UserRepository userRepository;
    
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUserType("USER");
        user.setCreationDate(new Date());
        return userRepository.save(user);
    }

    // Read
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Update
    public User updateUser(Long id, User newUser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(passwordEncoder.encode(newUser.getPassword()));
                    user.setIdNumber(newUser.getIdNumber());
                    user.setSector(newUser.getSector());
                    user.setLocation(newUser.getLocation());
                    user.setGender(newUser.getGender());
                    user.setAge(newUser.getAge());
                    user.setPhone(newUser.getPhone());
                    user.setCreationDate(newUser.getCreationDate());
                    user.setUserType("User");
                    return userRepository.save(user);
                })
                .orElse(null);
    }

    // Delete
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    public Optional<User> getUserByIdNumber(String idNumber) {
        return userRepository.findByIdNumber(idNumber);
    }
}
