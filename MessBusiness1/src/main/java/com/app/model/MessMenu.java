package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="messmenu")
public class MessMenu {
@Id

	private int id;
	private String Img;
private String dishTitle;
private String dishDescription;
private String dishPrice;
private String veg;
public String getVeg() {
	return veg;
}
public void setVeg(String veg) {
	this.veg = veg;
}


private long businessId;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getImg() {
	return Img;
}
public void setImg(String img) {
	Img = img;
}
public String getDishTitle() {
	return dishTitle;
}
public void setDishTitle(String dishTitle) {
	this.dishTitle = dishTitle;
}
public String getDishDescription() {
	return dishDescription;
}
public void setDishDescription(String dishDescription) {
	this.dishDescription = dishDescription;
}
public String getDishPrice() {
	return dishPrice;
}
public void setDishPrice(String dishPrice) {
	this.dishPrice = dishPrice;
}
public long getBusinessId() {
	return businessId;
}
public void setBusinessId(long businessId) {
	this.businessId = businessId;
}

@Override
public String toString() {
	return "MessMenu [id=" + id + ", Img=" + Img + ", dishTitle=" + dishTitle + ", dishDescription=" + dishDescription
			+ ", dishPrice=" + dishPrice + ", veg=" + veg + ", businessId=" + businessId + "]";
}

}
