package com.corpozulia.counting;

import com.corpozulia.counting.models.User;
import com.corpozulia.counting.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DataInitializer implements ApplicationListener<ContextRefreshedEvent> {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserRepository userRepository;
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		// Este método se llamará cuando arranque la aplicación

		// Verificamos si ya existe un usuario administrador en la base de datos
		if (!userRepository.existsByUserType("ADMIN")) {
			// Si no existe, creamos uno
			User adminUser = new User();
			adminUser.setName("Admin");
			adminUser.setSurname("Apellido");
			adminUser.setEmail("admin@example.com");
			adminUser.setPassword(passwordEncoder.encode("admin123"));
			adminUser.setIdNumber("12345678");
			adminUser.setSector("Administration");
			adminUser.setLocation("Headquarters");
			adminUser.setGender("Male");
			adminUser.setAge(35);
			adminUser.setPhone("1234567890");
			adminUser.setCreationDate(new Date());
			adminUser.setUserType("ADMIN");
			userRepository.save(adminUser);
		}
	}
}
