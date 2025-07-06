package com.vertoz.service;

import com.vertoz.model.*;
import com.vertoz.repository.CompanyInformationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegistrationService {

    private final CompanyInformationRepository companyRepo;

    public String saveRegistration(FullRegistrationDto dto) {
        CompanyInformationDto companyDto = dto.getCompany();
        CompanyInformation company = CompanyInformation.builder()
                .companyName(companyDto.getCompanyName())
                .businessManagerName(companyDto.getBusinessManagerName())
                .phoneCountryCode(companyDto.getPhoneCountryCode())
                .phoneNumber(companyDto.getPhoneNumber())
                .companyEmail(companyDto.getCompanyEmail())
                .designation(companyDto.getDesignation())
                .build();
        companyRepo.save(company);
        return "Registration saved successfully!";
    }

    public String saveCompanyInformation(CompanyInformationDto companyDto) {
        CompanyInformation company = CompanyInformation.builder()
                .companyName(companyDto.getCompanyName())
                .businessManagerName(companyDto.getBusinessManagerName())
                .phoneCountryCode(companyDto.getPhoneCountryCode())
                .phoneNumber(companyDto.getPhoneNumber())
                .companyEmail(companyDto.getCompanyEmail())
                .designation(companyDto.getDesignation())
                .build();
        companyRepo.save(company);
        return "Company information saved successfully!";
    }
}