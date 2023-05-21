package com.mgzparanoid.budgetmanager.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "expenses", schema = "public")
public class Expense extends AbstractEntity {

    private Double value;

    private String description;

    @Column(nullable = false, name = "whenspent")
    private String whenSpent;
}
