package com.adonay.monsters.entity.models;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "monsters")
public class Monster implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	private String type;

	private String weak_element;
	
	private String element_apply;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getWeak_element() {
		return weak_element;
	}

	public void setWeak_element(String weak_element) {
		this.weak_element = weak_element;
	}

	public String getElement_apply() {
		return element_apply;
	}

	public void setElement_apply(String element_apply) {
		this.element_apply = element_apply;
	}

	public Monster(String name, String type, String weak_element, String element_apply) {
		super();
		this.name = name;
		this.type = type;
		this.weak_element = weak_element;
		this.element_apply = element_apply;
	}

	public Monster() {
		
	}



	
}
