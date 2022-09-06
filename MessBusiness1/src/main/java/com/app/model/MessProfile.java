package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="busdetails")
public class MessProfile {

	@Id
	private long o_no;
	
	private String oname;
private String mname;
private long mcontact;
private String mtype;
private String description;
private String madress;
private double lattitude;
private double longitude;
private String m_time;
private String e_time;
private String messProfileImg;
private String veg;

public String getMessProfileImg() {
	return messProfileImg;
}
public void setMessProfileImg(String messProfileImg) {
	this.messProfileImg = messProfileImg;
}
public String getVeg() {
	return veg;
}
public void setVeg(String veg) {
	this.veg = veg;
}

public long getO_no() {
	return o_no;
}
public void setO_no(long o_no) {
	this.o_no = o_no;
}
public String getOname() {
	return oname;
}
public void setOname(String oname) {
	this.oname = oname;
}
public String getMname() {
	return mname;
}
public void setMname(String mname) {
	this.mname = mname;
}
public long getMcontact() {
	return mcontact;
}
public void setMcontact(long mcontact) {
	this.mcontact = mcontact;
}
public String getMtype() {
	return mtype;
}
public void setMtype(String mtype) {
	this.mtype = mtype;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getMadress() {
	return madress;
}
public void setMadress(String madress) {
	this.madress = madress;
}


public String getM_time() {
	return m_time;
}
public void setM_time(String m_time) {
	this.m_time = m_time;
}
public String getE_time() {
	return e_time;
}
public void setE_time(String e_time) {
	this.e_time = e_time;
}
public double getLattitude() {
	return lattitude;
}
public void setLattitude(double lattitude) {
	this.lattitude = lattitude;
}
public double getLongitude() {
	return longitude;
}
public void setLongitude(double longitude) {
	this.longitude = longitude;
}


//******************************To check Mobile no,email,and password***************************

public String detail() {
	
	
	String mono=String.valueOf(o_no);
	 if((mono.length()==10 )){

		 String mno=String.valueOf(mcontact);
	 if (mno.length()==7 || mno.length()==10) {
	System.out.println("\t\t\t\t\t*Please enter correct mobile number it must be 10 digit.\n");
	return "yes";
	}
	 }
	 return "no";
}



@Override
public String toString() {
	return "BusDetails [o_no=" + o_no + ", oname=" + oname + ", mname=" + mname + ", mcontact=" + mcontact + ", mtype="
			+ mtype + ", description=" + description + ", madress=" + madress + ", lattitude=" + lattitude
			+ ", longitude=" + longitude + ", m_time=" + m_time + ", e_time=" + e_time + "]";
}



}
