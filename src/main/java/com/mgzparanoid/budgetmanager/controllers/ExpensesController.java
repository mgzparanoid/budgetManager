package com.mgzparanoid.budgetmanager.controllers;

import com.mgzparanoid.budgetmanager.entities.Expense;
import com.mgzparanoid.budgetmanager.repositories.ExpensesRepository;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(maxAge = 3600)
@RestController
public class ExpensesController {
    @Resource
    ExpensesRepository expensesRepository;

    @GetMapping("/expenses/{month}")
    public List<Expense> spending(@PathVariable String month) {
        List<Expense> expenses = expensesRepository.allExpensesInAMonth(month).stream().collect(Collectors.toList());
        return expenses;
    }

    @DeleteMapping("/expenses/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        expensesRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
