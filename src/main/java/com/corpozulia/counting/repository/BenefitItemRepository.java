package com.corpozulia.counting.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpozulia.counting.models.BenefitItem;

public interface BenefitItemRepository extends JpaRepository<BenefitItem, Long>{

	List<BenefitItem> findByBenefitId(Long benefitId);

}
