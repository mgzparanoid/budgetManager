package com.mgzparanoid.budgetmanager.controllers;

//import com.mgzparanoid.budgetmanager.entities.FixedMonthlyEarnings;
//import com.mgzparanoid.budgetmanager.entities.FixedMonthlySpending;
//import com.mgzparanoid.budgetmanager.repositories.FixedMonthlyEarningsRepository;
//import com.mgzparanoid.budgetmanager.repositories.FixedMonthlySpendingRepository;
import com.mgzparanoid.budgetmanager.entities.FixedMonthlyIncomeAndExpenses;
import com.mgzparanoid.budgetmanager.repositories.FixedMonthlyIncomeAndExpensesRepository;
import com.mgzparanoid.budgetmanager.repositories.FundsRepository;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(maxAge = 3600)
@RestController
public class HomeController {
    @Resource
    FixedMonthlyIncomeAndExpensesRepository fixedMonthlyIncomeAndExpensesRepository;

    @GetMapping("/spending")
    public List<FixedMonthlyIncomeAndExpenses> spending() {
        List<FixedMonthlyIncomeAndExpenses> fundsSpendings = fixedMonthlyIncomeAndExpensesRepository.getAllExpenses().stream().collect(Collectors.toList());
        return fundsSpendings;
    }
    @GetMapping("/earnings")
    public List<FixedMonthlyIncomeAndExpenses> earnings() {
        List<FixedMonthlyIncomeAndExpenses> fundsSpendings = fixedMonthlyIncomeAndExpensesRepository.getAllIncome().stream().collect(Collectors.toList());
        return fundsSpendings;
    }

    @DeleteMapping("/fixedmontly/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        fixedMonthlyIncomeAndExpensesRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
