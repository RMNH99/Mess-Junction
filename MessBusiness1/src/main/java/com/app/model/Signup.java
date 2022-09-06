package com.app.model;

import java.util.regex.Pattern;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name ="bussignup")

public class Signup {

@Id private long o_no;
private String password;
private String first_name;
private String last_name;
private String email;

//@OneToOne(cascade = CascadeType.ALL)
//
//private BusDetails busdetails;
//
//
//
//public BusDetails getBusdetails() {
//	return busdetails;
//}
//public void setBusdetails(BusDetails busdetails) {
//	this.busdetails = busdetails;
//}
public long getO_no() {
	return o_no;
}
public void setO_no(long o_no) {
	this.o_no = o_no;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getFirst_name() {
	return first_name;
}
public void setFirst_name(String first_name) {
	this.first_name = first_name;
}
public String getLast_name() {
	return last_name;
}
public void setLast_name(String last_name) {
	this.last_name = last_name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}





public String signupCoding() {
	Pattern pattern;
	
	
	String email_regex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

    pattern = Pattern.compile(email_regex);
   

    	
    if(pattern.matcher(email).matches()==true){
    	String mono=String.valueOf(o_no);
    		 if((mono.length()==10 )){
    	
 			
    		 if (password.length()<=8) {
 			System.out.println("\t\t\t\t\t*Please enter correct mobile number it must be 10 digit.\n");
 			return "yes";
 			}
    	 }
    } else {
			
			return "no";
		}
    
    
    return email_regex;
}

@Override
public String toString() {
	return "Signup [o_no=" + o_no + ", password=" + password + ", first_name=" + first_name + ", last_name="
			+ last_name + ", email=" + email + "]";
}


}
