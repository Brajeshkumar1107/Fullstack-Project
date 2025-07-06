package com.vertoz.repository;

import com.vertoz.model.CompanyInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyInformationRepository extends JpaRepository<CompanyInformation, Long> {
}
