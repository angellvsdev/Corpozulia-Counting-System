package com.corpozulia.counting.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*") // Permitir solicitudes desde cualquier origen
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
            .allowedHeaders("*"); // Headers permitidos
    }
}
