package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table (name="busdetails")
public class BusDetails {

	@Id
	private long o_no;
	
private String mname;
private String oname;
private long mcontact;
private String mtype;
private String description;
private String Veg;
private String madress;
private double lattitude;
private double longitude;
private String mo_time;
private String mc_time;
private String eo_time;
private String ec_time;
private String messProfileImg;

public long getO_no() {
	return o_no;
}
public void setO_no(long o_no) {
	this.o_no = o_no;
}
public String getMname() {
	return mname;
}
public void setMname(String mname) {
	this.mname = mname;
}
public String getoname() {
	return oname;
}
public void setoname(String oname) {
	this.oname = oname;
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
public String getMo_time() {
	return mo_time;
}
public void setMo_time(String mo_time) {
	this.mo_time = mo_time;
}
public String getMc_time() {
	return mc_time;
}
public void setMc_time(String mc_time) {
	this.mc_time = mc_time;
}
public String getEo_time() {
	return eo_time;
}
public void setEo_time(String eo_time) {
	this.eo_time = eo_time;
}
public String getEc_time() {
	return ec_time;
}
public void setEc_time(String ec_time) {
	this.ec_time = ec_time;
}
public double getLattitude() {
	return lattitude;
}
public void setLattitude(double lattitude) {
	this.lattitude = lattitude;
}
public String getVeg() {
	return Veg;
}
public void setVeg(String Veg) {
	this.Veg = Veg;
}
public double getLongitude() {
	return longitude;
}
public void setLongitude(double longitude) {
	this.longitude = longitude;
}
public String getMessProfileImg() {
	return messProfileImg;
}
public void setMessProfileImg(String messProfileImg) {
	this.messProfileImg = messProfileImg;
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
	return "BusDetails [o_no=" + o_no + ", mname=" + mname + ", oname=" + oname + ", mcontact=" + mcontact + ", mtype="
			+ mtype + ", description=" + description + ", Veg=" + Veg + ", madress=" + madress + ", lattitude="
			+ lattitude + ", longitude=" + longitude + ", mo_time=" + mo_time + ", mc_time=" + mc_time + ", eo_time="
			+ eo_time + ", ec_time=" + ec_time + ", messProfileImg=" + messProfileImg + "]";
}









}
