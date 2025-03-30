package com.spring.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.spring.app.services.VideoService;

@SpringBootTest
class SpringStreamingAppApplicationTests {

	@Autowired
	VideoService videoService;

	@Test
	void contextLoads() {

		


	}

}
