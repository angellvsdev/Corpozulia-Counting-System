package com.corpozulia.counting.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.models.User;

public interface RequestRepository extends JpaRepository<Request, Long> {
	Optional<Request> findByUserId(Long userId);

	@Query("SELECT r FROM Request r WHERE NOT EXISTS (SELECT b FROM Benefit b WHERE b.request = r)")
	Page<Request> findRequestsNoBenefit(Pageable pageable);

	boolean existsByUser(User user);
}
