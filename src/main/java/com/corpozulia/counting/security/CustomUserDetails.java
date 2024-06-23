package com.corpozulia.counting.security;

import com.corpozulia.counting.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class CustomUserDetails implements UserDetails {

    /**
	 * 
	 */
	private static final long serialVersionUID = -8260559534990357675L;
	private User user;

    public CustomUserDetails(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(this.user.getUserType()));
    }

    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {
        return this.user.getEmail(); // O el campo que uses como username
    }

    // Implementa los métodos restantes según sea necesario

    @Override
    public boolean isAccountNonExpired() {
        return true; // Implementa la lógica de expiración de cuenta si es necesario
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Implementa la lógica de cuenta bloqueada si es necesario
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Implementa la lógica de credenciales expiradas si es necesario
    }

    @Override
    public boolean isEnabled() {
        return true; // Implementa la lógica de cuenta habilitada si es necesario
    }

    // Agrega getters y setters según sea necesario para el objeto User y otros atributos relacionados
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
