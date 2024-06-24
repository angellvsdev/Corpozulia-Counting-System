package com.corpozulia.counting.security;

import com.corpozulia.counting.models.User;
import com.corpozulia.counting.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
	
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByIdNumber(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        
        return new CustomUserDetails(user);
    }
}
