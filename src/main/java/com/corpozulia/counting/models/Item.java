package com.corpozulia.counting.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Clase que representa un ítem dentro de un beneficio.
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Nombre del ítem.
     */
    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false)
    private String name;

    /**
     * Descripción del ítem.
     */
    private String description;

    /**
     * Cantidad del ítem.
     */
    @NotNull(message = "La cantidad es obligatoria")
    @Column(nullable = false)
    private int quantity;

    /**
     * Lista de relaciones entre beneficios e ítems.
     */
    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<BenefitItem> benefitItems;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public List<BenefitItem> getBenefitItems() {
        return benefitItems;
    }

    public void setBenefitItems(List<BenefitItem> benefitItems) {
        this.benefitItems = benefitItems;
    }
}
