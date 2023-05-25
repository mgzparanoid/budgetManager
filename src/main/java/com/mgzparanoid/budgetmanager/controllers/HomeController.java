package com.mgzparanoid.budgetmanager.controllers;

import com.mgzparanoid.budgetmanager.entities.FixedMonthlyIncomeAndExpenses;
import com.mgzparanoid.budgetmanager.repositories.FixedMonthlyIncomeAndExpensesRepository;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
public class HomeController {
    @Resource
    FixedMonthlyIncomeAndExpensesRepository fixedMonthlyIncomeAndExpensesRepository;

    @GetMapping("/spending")
    public List<FixedMonthlyIncomeAndExpenses> spending() {
        return new ArrayList<>(fixedMonthlyIncomeAndExpensesRepository.getAllExpenses());
    }
    @GetMapping("/earnings")
    public List<FixedMonthlyIncomeAndExpenses> earnings() {
        return new ArrayList<>(fixedMonthlyIncomeAndExpensesRepository.getAllIncome());
    }

    @DeleteMapping("/fixedmontly/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        fixedMonthlyIncomeAndExpensesRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
