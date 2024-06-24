package com.corpozulia.counting.service;

import com.corpozulia.counting.models.Benefit;
import com.corpozulia.counting.models.BenefitItem;
import com.corpozulia.counting.models.Item;
import com.corpozulia.counting.repository.BenefitItemRepository;
import com.corpozulia.counting.repository.BenefitRepository;
import com.corpozulia.counting.repository.ItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BenefitItemService {

    @Autowired
    private BenefitItemRepository benefitItemRepository;

    @Autowired
    private BenefitRepository benefitRepository;

    @Autowired
    private ItemRepository itemRepository;

    public BenefitItem addBenefitItem(Long benefitId, BenefitItem benefitItem) {
        Optional<Benefit> benefitOptional = benefitRepository.findById(benefitId);
        if (benefitOptional.isEmpty()) {
            throw new IllegalArgumentException("Benefit not found");
        }

        Optional<Item> itemOptional = itemRepository.findById(benefitItem.getItem().getId());
        if (itemOptional.isEmpty()) {
            throw new IllegalArgumentException("Item not found");
        }

        benefitItem.setBenefit(benefitOptional.get());
        benefitItem.setItem(itemOptional.get());

        return benefitItemRepository.save(benefitItem);
    }

    public List<BenefitItem> getBenefitItemsByBenefitId(Long benefitId) {
        return benefitItemRepository.findByBenefitId(benefitId);
    }

    public Optional<BenefitItem> updateBenefitItem(Long id, BenefitItem benefitItem) {
        return benefitItemRepository.findById(id)
                .map(existingBenefitItem -> {
                    existingBenefitItem.setQuantity(benefitItem.getQuantity());
                    return benefitItemRepository.save(existingBenefitItem);
                });
    }

    public boolean deleteBenefitItem(Long id) {
        if (benefitItemRepository.existsById(id)) {
            benefitItemRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
