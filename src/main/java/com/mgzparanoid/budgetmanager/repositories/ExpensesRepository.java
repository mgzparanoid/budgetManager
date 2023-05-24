package com.mgzparanoid.budgetmanager.repositories;

import com.mgzparanoid.budgetmanager.entities.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface ExpensesRepository extends JpaRepository<Expense, Long> {

    @Query(value = "SELECT * FROM expenses WHERE whenSpent LIKE %:date%", nativeQuery = true)
    List<Expense> allExpensesInAMonth(@PathVariable("date") String date);

    List<Expense> findAll();

}
