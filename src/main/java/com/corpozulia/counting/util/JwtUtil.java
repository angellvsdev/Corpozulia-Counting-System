package com.corpozulia.counting.util;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;


@Component
public class JwtUtil {
	private static final Set<String> invalidTokens = new HashSet<>();
	private final SecretKey secretKey = Jwts.SIG.HS256.key().build();
	private Long expiration = 86400000L;

	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, userDetails.getUsername());
	}

	private String createToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().claims(claims).subject(subject).issuedAt(new Date(System.currentTimeMillis()))
				.expiration(new Date(System.currentTimeMillis() + expiration)).signWith(secretKey, Jwts.SIG.HS256)
				.compact();
	}
	public boolean validateToken(String token, UserDetails userDetails) {
		if (invalidTokens.contains(token)) {
			return false;
		}
		final String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

	private boolean isTokenExpired(String token) {
		final Date expirationDate = extractExpiration(token);
		return expirationDate.before(new Date());
	}

	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}

	private Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

	private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}

	public Claims extractAllClaims(String token) {
		return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload();

	}

	public void invalidateToken(String token) {
		// Agregar el token a la lista de tokens inválidos al desloguearse
		invalidTokens.add(token);
	}

	@Scheduled(fixedRate = 1800) // Ejecutar cada 24 horas (ajusta según tus necesidades)
	public void cleanInvalidTokens() {
		// Limpiar la lista de tokens inválidos
		invalidTokens.clear();
	}
}