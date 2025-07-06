package com.vertoz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vertoz.model.FullRegistrationDto;
import com.vertoz.model.CompanyInformationDto;
import com.vertoz.service.RegistrationService;

@RestController
@RequestMapping("/registration")
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("/submit")
    public ResponseEntity<?> submitRegistration(@ModelAttribute FullRegistrationDto registrationDto) {
        System.out.println("Running......................");
        try {
            String response = registrationService.saveRegistration(registrationDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/company-info")
    public ResponseEntity<?> saveCompanyInfo(@ModelAttribute CompanyInformationDto companyDto) {
        try {
            String response = registrationService.saveCompanyInformation(companyDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error: " + e.getMessage());
        }
    }
}
