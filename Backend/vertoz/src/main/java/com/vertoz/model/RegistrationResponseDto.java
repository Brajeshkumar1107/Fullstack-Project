package com.vertoz.model;


import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistrationResponseDto {
    private String companyName;
    private String managerName;
    private String email;
    private String phone;
    private LocalDateTime registeredAt;
}