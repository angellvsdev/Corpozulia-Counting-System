package com.corpozulia.counting.controller;

import com.corpozulia.counting.models.Benefit;
import com.corpozulia.counting.service.BenefitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador para manejar operaciones relacionadas con beneficios.
 */
@RestController
@RequestMapping("/api/benefits")
public class BenefitController {

    @Autowired
    private BenefitService benefitService;

    /**
     * Endpoint para crear un beneficio asociado a una solicitud.
     *
     * @param requestId Identificador de la solicitud
     * @param benefit   Datos del beneficio a crear
     * @return ResponseEntity con el beneficio creado o un error de solicitud incorrecta (400)
     */
    @PostMapping("/request/{requestId}")
    public ResponseEntity<Benefit> createBenefit(@PathVariable Long requestId, @RequestBody Benefit benefit) {
        try {
            Benefit createdBenefit = benefitService.createBenefit(requestId, benefit);
            return ResponseEntity.ok(createdBenefit);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null); // Manejo de error cuando la solicitud es incorrecta
        }
    }
    public ResponseEntity<Benefit> getBenefitsByUserId(@PathVariable Long userId) {
        // Validar que userId no sea nulo o negativo
        if (userId == null || userId <= 0) {
            return ResponseEntity.badRequest().build();
        }

        // Llamar al servicio para obtener el beneficio por userId
        Benefit benefit = benefitService.getBenefitByUserId(userId);

        // Si no se encuentra beneficio para el userId dado
        if (benefit == null) {
            return ResponseEntity.notFound().build();
        }

        // Devolver el beneficio encontrado
        return ResponseEntity.ok(benefit);
    }
    /**
     * Endpoint para obtener todos los beneficios.
     *
     * @return ResponseEntity con la lista de beneficios existentes
     */
    @GetMapping
    public ResponseEntity<List<Benefit>> getAllBenefits() {
        List<Benefit> benefits = benefitService.getAllBenefits();
        return ResponseEntity.ok(benefits);
    }

    /**
     * Endpoint para obtener un beneficio por su ID.
     *
     * @param id Identificador del beneficio
     * @return ResponseEntity con el beneficio encontrado o notFound si no existe
     */
    @GetMapping("/{id}")
    public ResponseEntity<Benefit> getBenefitById(@PathVariable Long id) {
        Optional<Benefit> benefitOptional = benefitService.getBenefitById(id);
        return benefitOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Endpoint para actualizar un beneficio existente.
     *
     * @param id       Identificador del beneficio a actualizar
     * @param newBenefit Datos actualizados del beneficio
     * @return ResponseEntity con el beneficio actualizado o notFound si no existe
     */
    @PutMapping("/{id}")
    public ResponseEntity<Benefit> updateBenefit(@PathVariable Long id, @RequestBody Benefit newBenefit) {
        Benefit updatedBenefit = benefitService.updateBenefit(id, newBenefit);
        if (updatedBenefit != null) {
            return ResponseEntity.ok(updatedBenefit);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Endpoint para eliminar un beneficio por su ID.
     *
     * @param id Identificador del beneficio a eliminar
     * @return ResponseEntity indicando el éxito de la operación o notFound si no existe el beneficio
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBenefit(@PathVariable Long id) {
        if (benefitService.deleteBenefit(id)) {
            return ResponseEntity.noContent().build(); // Éxito en la eliminación
        } else {
            return ResponseEntity.notFound().build(); // No se encontró el beneficio
        }
    }
}
