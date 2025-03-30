package com.spring.app.repositories;

import com.spring.app.entities.Video;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;



public interface VideoRepository extends JpaRepository<Video, String>{
    Optional<Video> findByTitle(String videoId);
}
