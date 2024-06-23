package com.corpozulia.counting.service;

import com.corpozulia.counting.models.Benefit;
import com.corpozulia.counting.models.BenefitItem;
import com.corpozulia.counting.models.Item;
import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.repository.BenefitItemRepository;
import com.corpozulia.counting.repository.BenefitRepository;
import com.corpozulia.counting.repository.ItemRepository;
import com.corpozulia.counting.repository.RequestRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BenefitService {
	
	@Autowired
	private BenefitItemRepository benefitItemRepository;
	@Autowired
	private ItemRepository itemRepository;
    @Autowired
    private BenefitRepository benefitRepository;
    @Autowired
    private RequestRepository requestRepository;

    @Transactional
    public Benefit createBenefit(Long requestId, Benefit benefit) {
        Optional<Request> requestOptional = requestRepository.findById(requestId);
        if (requestOptional.isEmpty()) {
            throw new IllegalArgumentException("Request not found");
        }

        Request request = requestOptional.get();
        if (benefitRepository.existsByRequest(request)) {
            throw new IllegalArgumentException("User already has a benefit for this request");
        }

        benefit.setUser(request.getUser());
        benefit.setRequest(request);
        Benefit savedBenefit = benefitRepository.save(benefit);

        if (benefit.getBenefitItems() != null) {
            for (BenefitItem benefitItem : benefit.getBenefitItems()) {
                Optional<Item> itemOptional = itemRepository.findById(benefitItem.getItem().getId());
                if (itemOptional.isEmpty()) {
                    throw new IllegalArgumentException("Item not found");
                }
                benefitItem.setBenefit(savedBenefit);
                benefitItem.setItem(itemOptional.get());
                benefitItemRepository.save(benefitItem);
            }
        }

        return savedBenefit;
    }
    public Page<Benefit> getAllBenefits(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return benefitRepository.findAll(pageable);
    }
    public Optional<Benefit> getBenefitByUser(Long userId) {
        // Buscar el request asociado al userId
        return benefitRepository.findByUserId(userId);
       
    }
    public Optional<Benefit> getBenefitById(Long id) {
        return benefitRepository.findById(id);
    }

    public Optional<Benefit> updateBenefit(Long id, Benefit newBenefit) {
        return Optional.of(benefitRepository.findById(id)
                .map(benefit -> {
                    benefit.setUser(newBenefit.getUser());
                    benefit.setDetails(newBenefit.getDetails());
                    benefit.setRequest(newBenefit.getRequest());
                    benefit.setStatus(newBenefit.getStatus());
                    benefit.setCreationDate(newBenefit.getCreationDate());
                    return benefitRepository.save(benefit);
                })
                .orElse(null));
    }

    public boolean deleteBenefit(Long id) {
        if (benefitRepository.existsById(id)) {
            benefitRepository.deleteById(id);
            return true;
        }
        return false;
    }
}