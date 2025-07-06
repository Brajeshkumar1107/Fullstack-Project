package com.vertoz.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompanyInformation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String businessManagerName;
    private String phoneCountryCode;
    private String phoneNumber;
    private String companyEmail;
    private String designation;
}
