package com.vertoz.model;


import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class CompanyInformationDto {

    @NotBlank(message = "Company name is required")
    @Size(max = 30, message = "Company name must be 30 characters or less")
    private String companyName;

    @NotBlank(message = "Business Manager name is required")
    @Size(max = 30, message = "Business Manager name must be 30 characters or less")
    private String businessManagerName;

    @NotBlank(message = "Phone country code is required")
    private String phoneCountryCode;

    @NotBlank(message = "Phone number is required")
    @Size(max = 30, message = "Phone number must be 30 characters or less")
    private String phoneNumber;

    @NotBlank(message = "Company email is required")
    @Email(message = "Invalid email format")
    @Size(max = 30, message = "Email must be 30 characters or less")
    private String companyEmail;

    @NotBlank(message = "Designation is required")
    @Size(max = 30, message = "Designation must be 30 characters or less")
    private String designation;
}