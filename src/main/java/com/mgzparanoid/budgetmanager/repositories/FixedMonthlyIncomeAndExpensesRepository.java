package com.mgzparanoid.budgetmanager.repositories;


import com.mgzparanoid.budgetmanager.entities.FixedMonthlyIncomeAndExpenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FixedMonthlyIncomeAndExpensesRepository extends JpaRepository<FixedMonthlyIncomeAndExpenses, Long> {
    @Query(value = "SELECT * FROM fixedmonthlyincomeandexpenses WHERE isexpense=1", nativeQuery = true)
    List<FixedMonthlyIncomeAndExpenses> getAllExpenses();

    @Query(value = "SELECT * FROM fixedmonthlyincomeandexpenses WHERE isexpense=0", nativeQuery = true)
    List<FixedMonthlyIncomeAndExpenses> getAllIncome();

}