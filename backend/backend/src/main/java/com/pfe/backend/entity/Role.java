package com.pfe.backend.entity;

public enum Role {
	
	USER,
	ADMIN
}


//
//import java.util.List;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.Id;
//import jakarta.persistence.ManyToMany;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Table;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "role")
//public class Role {
//
//	@Id
//	@GeneratedValue
//	long id;
//	String intituleRole;
//	String descriptionRole;
//	@ManyToMany
//	List<Permission> listePermission;
//	
//	
//}
