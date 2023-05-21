package com.mgzparanoid.budgetmanager.repositories;

import com.mgzparanoid.budgetmanager.entities.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundsRepository extends JpaRepository<Expense, Long> {
}
