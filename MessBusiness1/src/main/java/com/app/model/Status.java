package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Status")
public class Status {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private long ono;
private String img;
private String caption;
private String time;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
public String getCaption() {
	return caption;
}
public void setCaption(String caption) {
	this.caption = caption;
}
public String getTime() {
	return time;
}
public void setTime(String time) {
	this.time = time;
}
public long getOno() {
	return ono;
}
public void setO_no(long ono) {
	this.ono = ono;
}
@Override
public String toString() {
	return "Status [ img=" + img + ", caption=" + caption + ", time=" + time + ", ono=" + ono + "]";
}




}
