package com.corpozulia.counting.models;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "El nombre es obligatorio")
	private String name;

	@NotBlank(message = "El apellido es obligatorio")
	private String surname;

	@NotBlank(message = "El correo es obligatorio")
	@Email(message = "El correo debe ser válido")
	@Column(nullable = false, unique = true)
	private String email;
	
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // Para permitir la deserialización
	@NotBlank(message = "La contraseña es obligatoria")
	@Size(min = 6, message = "La contraseña debe tener mas de 6 carácteres")
	@Column(nullable = false)
	private String password;

	@NotBlank(message = "El número de cédula es obligatorio")
	@Pattern(regexp = "[0-9]{7,8}", message = "El número de cédula debe tener entre 7 y 8 dígitos")
	@Column(nullable = false, unique = true)
	private String idNumber;

	@NotBlank(message = "El sector es obligatorio")
	@Column(nullable = false)
	private String sector;

	@NotBlank(message = "La ubicación es obligatoria")
	@Column(nullable = false)
	private String location;

	@NotBlank(message = "El género es obligatorio")
	@Column(nullable = false)
	private String gender;

	@Column(nullable = false)
	private int age;

	@NotBlank(message = "El teléfono es obligatorio")
	@Column(nullable = false)
	private String phone;

	@JsonIgnore
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date creationDate;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // Para permitir la deserialización
	@NotBlank(message = "El tipo de usuario es obligatorio")
	@Column(nullable = false)
	private String userType;

    public User(String name, String email, String idNumber) {
        this.name = name;
        this.email = email;
        this.idNumber = idNumber;
    }
    public User() {
    	
    }
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

}
