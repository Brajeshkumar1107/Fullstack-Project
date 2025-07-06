package com.vertoz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VertozApplication {

	public static void main(String[] args) {
		// Set Tomcat file upload fileCountMax to 10
		System.setProperty("org.apache.tomcat.util.http.fileupload.FileUploadBase.fileCountMax", "10");
		SpringApplication.run(VertozApplication.class, args);
	}

}
