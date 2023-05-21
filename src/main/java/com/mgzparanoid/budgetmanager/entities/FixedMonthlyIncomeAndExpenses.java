package com.mgzparanoid.budgetmanager.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "fixedmonthlyincomeandexpenses", schema = "public")
public class FixedMonthlyIncomeAndExpenses extends AbstractEntity {

    @Column(nullable = false, name = "isactive")
    private Boolean isActive;

    @Column(nullable = false, name = "isexpense")
    private Boolean isExpense;

}

