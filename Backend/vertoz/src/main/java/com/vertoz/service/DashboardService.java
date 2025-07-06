package com.vertoz.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.vertoz.model.RegistrationResponseDto;
import com.vertoz.repository.CompanyInformationRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final CompanyInformationRepository repository;

    public List<RegistrationResponseDto> getAllRegistrations() {
        return repository.findAll().stream()
                .map(info -> RegistrationResponseDto.builder()
                        .companyName(info.getCompanyName())
                        .managerName(info.getBusinessManagerName())
                        .email(info.getCompanyEmail())
                        .phone(info.getPhoneNumber())
                        .registeredAt(null)
                        .build())
                .collect(Collectors.toList());
    }
}