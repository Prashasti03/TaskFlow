package com.taskflow.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController 
@RequestMapping("/api/health")
public class HealthController {
    
    @GetMapping
    public String healthCheck(){
        return "TaskFlow Backend is running successfully!";
    }
}
