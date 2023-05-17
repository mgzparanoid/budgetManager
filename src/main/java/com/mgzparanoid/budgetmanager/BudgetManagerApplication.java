package com.mgzparanoid.budgetmanager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class BudgetManagerApplication {

    private static final Logger log = LoggerFactory.getLogger(BudgetManagerApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(BudgetManagerApplication.class, args);
    }


}
