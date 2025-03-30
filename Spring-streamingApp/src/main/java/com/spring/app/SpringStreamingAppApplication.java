package com.spring.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages = "com.spring.app") 
public class SpringStreamingAppApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(SpringStreamingAppApplication.class, args);
	}

}
