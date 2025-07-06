package com.vertoz.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vertoz.service.DashboardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/registration")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/dashboard")
    public ResponseEntity<?> getRegistrations() {
        return ResponseEntity.ok(dashboardService.getAllRegistrations());
    }
}
