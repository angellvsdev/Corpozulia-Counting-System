package com.corpozulia.counting.controller;

import com.corpozulia.counting.dto.RequestDTO;
import com.corpozulia.counting.models.Request;
import com.corpozulia.counting.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();
    }

    /**
     * Endpoint para obtener las solicitudes de un usuario por su ID.
     *
     * @param userId ID del usuario
     * @return ResponseEntity con la solicitud encontrada o notFound si no existe
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<Request> getRequestsByUserId(@PathVariable Long userId) {
        Request request = requestService.getRequestByUserId(userId);
        if (request == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(request);
        }
    }

    /**
     * Endpoint para crear una nueva solicitud.
     *
     * @param requestDTO Datos de la solicitud a crear
     * @return ResponseEntity con la solicitud creada y código de estado OK si es exitoso
     */
    @PostMapping
    public ResponseEntity<?> createRequest(@RequestBody RequestDTO requestDTO) {
        try {
            Request request = requestService.createRequest(requestDTO);
            return ResponseEntity.ok(request);
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
