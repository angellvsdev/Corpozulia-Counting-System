package com.corpozulia.counting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.models.User;

public interface RequestRepository extends JpaRepository <Request, Long> {
	Request findByUserId(Long userId);

	boolean existsByUser(User user);
}
