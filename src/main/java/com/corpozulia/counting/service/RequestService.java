package com.corpozulia.counting.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corpozulia.counting.dto.RequestDTO;
import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.models.User;
import com.corpozulia.counting.repository.RequestRepository;

@Service

public class RequestService {
	@Autowired
	private UserService userService;
	@Autowired
	private RequestRepository requestRepository;

    public Request getRequestByUserId(Long userId) {
    	Request request = requestRepository.findByUserId(userId);
        return request;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request createRequest(RequestDTO requestDTO) {
        Optional<User> userOptional = userService.getUserById(requestDTO.getUserId());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (userHasExistingRequest(user)) {
                throw new IllegalArgumentException("User already has a request");
            }
            Request request = new Request();
            request.setMessage(requestDTO.getMessage());
            request.setUser(user);
            requestRepository.save(request);
            return request;
        } else {
            throw new IllegalArgumentException("User not found");
        }
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
