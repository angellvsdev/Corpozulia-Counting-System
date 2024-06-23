package com.corpozulia.counting.controller;

import com.corpozulia.counting.dto.RequestDTO;
import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Controlador para manejar operaciones relacionadas con las solicitudes.
 */
@RestController
@RequestMapping("/api/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    /**
     * Endpoint para obtener todas las solicitudes.
     *
     * @return Lista de todas las solicitudes existentes
     */
    @GetMapping
    public ResponseEntity<Page<Request>> getAllBenefits(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Page<Request> requests = requestService.getAllRequests(page, size);
        return ResponseEntity.ok(requests);
    }

    /**
     * Endpoint para obtener las solicitudes de un usuario por su ID.
     *
     * @param userId ID del usuario
     * @return ResponseEntity con la solicitud encontrada o notFound si no existe
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<Request> getRequestsByUserId(@PathVariable Long userId) {
        // Validar que userId no sea negativo
        if (userId <= 0) {
            return ResponseEntity.badRequest().build();
        }

        // Llamar al servicio para obtener la solicitud por userId
        Optional<Request> request = requestService.getRequestByUserId(userId);

        // Si no se encuentra solicitud para el userId dado
        if (request.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        // Devolver la solicitud encontrada
        return ResponseEntity.ok(request.get());
    }
    /**
     * Endpoint para crear una nueva solicitud.
     *
     * @param requestDTO Datos de la solicitud a crear
     * @return ResponseEntity con la solicitud creada y código de estado OK si es exitoso
     */
    @PostMapping
    public ResponseEntity<?> createRequest(@RequestBody Request request) {
        try {
            Request request1 = requestService.createRequest(request);
            return ResponseEntity.ok(request1);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // Manejo de errores de solicitud incorrecta
        }
    }

    /**
     * Endpoint para eliminar una solicitud por su ID.
     *
     * @param id ID de la solicitud a eliminar
     * @return ResponseEntity indicando el éxito de la operación o notFound si no existe la solicitud
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable Long id) {
        if (requestService.deleteRequest(id)) {
            return ResponseEntity.noContent().build(); // Éxito en la eliminación
        } else {
            return ResponseEntity.notFound().build(); // No se encontró la solicitud
        }
    }
}
