package com.corpozulia.counting.service;

import com.corpozulia.counting.models.Benefit;
import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.models.User;
import com.corpozulia.counting.repository.BenefitRepository;
import com.corpozulia.counting.repository.RequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BenefitService {

    @Autowired
    private BenefitRepository benefitRepository;
    @Autowired
    private RequestRepository requestRepository;

    public Benefit createBenefit(Long requestId, Benefit benefit) {
        // Validar que el request exista
        Optional<Request> requestOptional = requestRepository.findById(requestId);
        if (requestOptional.isEmpty()) {
            throw new IllegalArgumentException("Request not found");
        }

        // Obtener el usuario del request
        Request request = requestOptional.get();
        User user = request.getUser();

        // Validar que el usuario no tenga ya un beneficio para ese request
        if (benefitRepository.existsByRequest(request)) {
            throw new IllegalArgumentException("User already has a benefit for this request");
        }

        // Completar los datos del beneficio
        benefit.setUser(user);
        benefit.setRequest(request);

        // Guardar el beneficio
        return benefitRepository.save(benefit);
    }
    public List<Benefit> getAllBenefits() {
        return benefitRepository.findAll();
    }

    public Benefit getBenefitByUserId(Long userId) {
        // Buscar el request asociado al userId
        Request request = requestRepository.findByUserId(userId);

        // Si no se encuentra el request, retornar null
        if (request == null) {
            return null;
        }

        // Buscar el beneficio asociado al request encontrado
        return benefitRepository.findByRequest(request);
    }
    public Optional<Benefit> getBenefitById(Long id) {
        return benefitRepository.findById(id);
    }

    public Benefit updateBenefit(Long id, Benefit newBenefit) {
        return benefitRepository.findById(id)
                .map(benefit -> {
                    benefit.setUser(newBenefit.getUser());
                    benefit.setDetails(newBenefit.getDetails());
                    benefit.setRequest(newBenefit.getRequest());
                    benefit.setStatus(newBenefit.getStatus());
                    benefit.setCreationDate(newBenefit.getCreationDate());
                    return benefitRepository.save(benefit);
                })
                .orElse(null);
    }

    public boolean deleteBenefit(Long id) {
        if (benefitRepository.existsById(id)) {
            benefitRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
