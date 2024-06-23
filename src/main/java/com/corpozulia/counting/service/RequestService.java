package com.corpozulia.counting.service;

import com.corpozulia.counting.dto.RequestDTO;
import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.models.User;
import com.corpozulia.counting.repository.RequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class RequestService {

    @Autowired
    private UserService userService;

    @Autowired
    private RequestRepository requestRepository;

    public Optional<Request> getRequestByUserId(Long userId) {
        return requestRepository.findByUserId(userId);
    }

    public Page<Request> getAllRequests(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return requestRepository.findAll(pageable);

    }

    public Request createRequest(Request request) {
        Optional<User> userOptional = userService.getUserById(request.getUser().getId());
            // Obtener el usuario asociado al request
        	if (userOptional.isEmpty()) {
        		throw new IllegalArgumentException("El usuario no existe.");
        	}
            User user = request.getUser();
            
            // Verificar si el usuario ya tiene una solicitud
            if (userHasExistingRequest(user)) {
                throw new IllegalArgumentException("User already has a request");
            }

            // Guardar la solicitud en la base de datos
            Request savedRequest = requestRepository.save(request);

            // Devolver ResponseEntity con la solicitud creada
            return savedRequest;
    }

    public boolean deleteRequest(Long id) {
        if (requestRepository.existsById(id)) {
            requestRepository.deleteById(id);
            return true;
        }
        return false;
    }

    private boolean userHasExistingRequest(User user) {
        return requestRepository.existsByUser(user);
    }
}
