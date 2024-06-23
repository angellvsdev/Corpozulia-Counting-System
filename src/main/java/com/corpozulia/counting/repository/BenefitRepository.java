package com.corpozulia.counting.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpozulia.counting.models.Benefit;
import com.corpozulia.counting.models.Request;

public interface BenefitRepository extends JpaRepository<Benefit, Long>{

    Optional<Benefit> findByRequest(Request request);

	boolean existsByRequest(Request request);

	Optional<Benefit> findByUserId(Long userId);

}
