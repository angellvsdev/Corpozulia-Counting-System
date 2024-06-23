package com.corpozulia.counting.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

/**
 * Entidad que representa un beneficio solicitado por un usuario.
 */
@Entity
@Table(name = "benefits")
public class Benefit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Usuario asociado al beneficio. Relación OneToOne: un usuario puede tener como máximo un beneficio.
     */
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    private User user;

    @NotBlank(message = "Los detalles son obligatorios")
    @Column(nullable = false)
    private String details;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "request_id", nullable = false)
    private Request request;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BenefitStatus status;

    @OneToMany(mappedBy = "benefit", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<BenefitItem> benefitItems;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "UTC")
    private Date creationDate;

    // Getters and setters (omitted for brevity)

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Request getRequest() {
        return request;
    }

    public void setRequest(Request request) {
        this.request = request;
    }

    public BenefitStatus getStatus() {
        return status;
    }

    public void setStatus(BenefitStatus status) {
        this.status = status;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public List<BenefitItem> getBenefitItems() {
        return benefitItems;
    }

    public void setBenefitItems(List<BenefitItem> benefitItems) {
        this.benefitItems = benefitItems;
    }
}
