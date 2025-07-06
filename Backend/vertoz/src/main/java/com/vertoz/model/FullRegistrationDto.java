package com.vertoz.model;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class FullRegistrationDto {
    @NotNull
    private CompanyInformationDto company;
}