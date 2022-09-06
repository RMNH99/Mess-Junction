package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public class Login {
	private long mo_no;
	private String password;
	
	public long getMo_no() {
		return mo_no;
	}
	public void setMo_no(long mo_no) {
		this.mo_no = mo_no;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	
	@Override
	public String toString() {
		return "Login [mo_no=" + mo_no + ", password=" + password + "]";
	}
	
	
}
