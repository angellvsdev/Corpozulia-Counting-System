package com.corpozulia.counting.controller;

import com.corpozulia.counting.models.Item;
import com.corpozulia.counting.service.ItemService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador para manejar operaciones relacionadas con los items.
 */
@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    /**
     * Endpoint para crear un nuevo item.
     *
     * @param item Datos del item a crear
     * @return ResponseEntity con el item creado y código de estado 201 si es exitoso
     */
    @PostMapping()
    public ResponseEntity<Item> createItem(@Valid @RequestBody Item item) {
        Item newItem = itemService.createItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(newItem);
    }

    /**
     * Endpoint para obtener todos los items.
     *
     * @return ResponseEntity con la lista de todos los items existentes
     */
    @GetMapping()
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.getAllItems();
        return ResponseEntity.ok(items);
    }

    /**
     * Endpoint para obtener un item por su ID.
     *
     * @param id Identificador del item
     * @return ResponseEntity con el item encontrado o notFound si no existe
     */
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
        Optional<Item> itemOptional = itemService.getItemById(id);
        return itemOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Endpoint para actualizar un item por su ID.
     *
     * @param id      Identificador del item a actualizar
     * @param newItem Datos actualizados del item
     * @return ResponseEntity con el item actualizado o notFound si no existe
     */
    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @Valid @RequestBody Item newItem) {
        Item updatedItem = itemService.updateItem(id, newItem);
        return updatedItem != null ? ResponseEntity.ok(updatedItem) : ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para eliminar un item por su ID.
     *
     * @param id Identificador del item a eliminar
     * @return ResponseEntity indicando el éxito de la operación o notFound si no existe el item
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        boolean deleted = itemService.deleteItem(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
