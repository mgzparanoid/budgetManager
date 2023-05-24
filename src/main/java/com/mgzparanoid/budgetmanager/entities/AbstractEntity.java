package com.mgzparanoid.budgetmanager.entities;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

@MappedSuperclass
@Data
public class AbstractEntity {
    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column(nullable = false)
    private Double value;

    @Column(nullable = false)
    private String description;
}
