package com.corpozulia.counting.controller;

import com.corpozulia.counting.models.User;
import com.corpozulia.counting.request.LoginRequest;
import com.corpozulia.counting.security.CustomUserDetails;
import com.corpozulia.counting.security.UserContext;
import com.corpozulia.counting.service.UserService;
import com.corpozulia.counting.util.JwtUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para la autenticación de usuarios (registro y login).
 */
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    /**
     * Endpoint para registrar un nuevo usuario.
     *
     * @param user   Usuario a registrar
     * @param result Resultado de la validación
     * @return ResponseEntity con el usuario creado o mensajes de error
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

        // Verificar si el correo electrónico ya está en uso
        Optional<User> existingUserByEmail = userService.getUserByEmail(user.getEmail());
        if (existingUserByEmail.isPresent()) {
            return new ResponseEntity<>("El correo electrónico ya está registrado", HttpStatus.BAD_REQUEST);
        }

        // Verificar si el número de cédula ya está en uso
        Optional<User> existingUserByIdNumber = userService.getUserByIdNumber(user.getIdNumber());
        if (existingUserByIdNumber.isPresent()) {
            return new ResponseEntity<>("El número de cédula ya está registrado", HttpStatus.BAD_REQUEST);
        }

        // Guardar el usuario en la base de datos
        User savedUser = userService.createUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    /**
     * Endpoint para realizar la autenticación de usuarios.
     *
     * @param loginRequest Datos de inicio de sesión (username y password)
     * @param response     Objeto HttpServletResponse para establecer la cookie
     * @return ResponseEntity con el contexto del usuario autenticado o mensajes de error
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );

            // Establecer la autenticación en el contexto de seguridad
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Generar token JWT
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String jwt = jwtUtil.generateToken(userDetails);

            // Guardar el token JWT en una cookie
            Cookie cookie = new Cookie("jwt", jwt);
            cookie.setMaxAge(24 * 60 * 60); // Duración de 24 horas (en segundos)
            cookie.setPath("/"); // Establecer la ruta de la cookie
            response.addCookie(cookie);

            // Obtener ID y rol del usuario
            CustomUserDetails customUserDetails = (CustomUserDetails) userDetails;

            // Crear objeto de respuesta
            UserContext userContext = new UserContext(customUserDetails.getUser());

            return ResponseEntity.ok(userContext);
        } catch (BadCredentialsException e) {
            // Manejar error de credenciales inválidas
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Credenciales inválidas");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }

    /**
     * Manejador para excepciones de validación de campos.
     *
     * @param ex Excepción de validación de campos
     * @return Mapa con los errores de validación
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        BindingResult result = ex.getBindingResult();
        Map<String, String> errors = new HashMap<>();
        for (FieldError error : result.getFieldErrors()) {
            errors.put(error.getField(), error.getDefaultMessage());
        }
        return errors;
    }

    /**
     * Manejador para excepción cuando no se encuentra el usuario durante la autenticación.
     *
     * @param ex Excepción de usuario no encontrado
     * @return Mapa con mensaje de error
     */
    @ExceptionHandler(UsernameNotFoundException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public Map<String, String> handleUsernameNotFoundException(UsernameNotFoundException ex) {
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", "Usuario no encontrado");
        return errorResponse;
    }

    /**
     * Manejador para excepción de credenciales inválidas durante la autenticación.
     *
     * @param ex Excepción de credenciales inválidas
     * @return Mapa con mensaje de error
     */
    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public Map<String, String> handleBadCredentialsException(BadCredentialsException ex) {
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", "Credenciales inválidas");
        return errorResponse;
    }

    /**
     * Manejador para excepciones generales no manejadas.
     *
     * @param ex Excepción general
     * @return Mapa con mensaje de error
     */
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, String> handleGeneralException(Exception ex) {
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", "Ocurrió un error inesperado");
        return errorResponse;
    }
}
