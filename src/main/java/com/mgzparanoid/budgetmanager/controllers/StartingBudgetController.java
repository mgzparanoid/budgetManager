package com.mgzparanoid.budgetmanager.controllers;

import com.mgzparanoid.budgetmanager.entities.FixedMonthlyIncomeAndExpenses;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
public class StartingBudgetController {
    @Value("${starting.budget}")
    private Integer userBucketPath;

    @GetMapping("/starting-budget")
    public Integer spending() {
        return userBucketPath;
    }
}
