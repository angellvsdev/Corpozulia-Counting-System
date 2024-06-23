package com.corpozulia.counting.repository;

import com.corpozulia.counting.models.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	boolean existsByUserType(String userType);
	Optional<User> findByEmail(String email);
	Optional<User> findByIdNumber(String idNumber);

}