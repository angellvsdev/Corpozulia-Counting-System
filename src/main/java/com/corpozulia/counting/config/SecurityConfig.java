package com.corpozulia.counting.config;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.corpozulia.counting.security.JwtRequestFilter;
import com.corpozulia.counting.security.MyAuthenticationProvider;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private MyAuthenticationProvider myAuthenticationProvider;
	@Autowired
	private JwtRequestFilter jwtRequestFilter;
    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        return new ProviderManager(Collections.singletonList(myAuthenticationProvider));
    }
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
				.authorizeHttpRequests(authorize -> authorize
						.requestMatchers("/api/request/test").hasAuthority("ROLE_USER")
						.requestMatchers("/api/protected").hasAuthority("ROLE_ADMIN")
						.anyRequest().permitAll())
				.formLogin(formLogin -> formLogin
						.loginPage("/")
						);
		http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}
}
