package com.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userBookmarks")
public class Bookmarks {

	@Id
	private int id;
	private long userno;
	private long busino;
	private String mess_img;
	private String mess_title;
	private String mess_desc;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getUserno() {
		return userno;
	}
	public void setUserno(long userno) {
		this.userno = userno;
	}
	public long getBusino() {
		return busino;
	}
	public void setBusino(long busino) {
		this.busino = busino;
	}
	public String getMess_img() {
		return mess_img;
	}
	public void setMess_img(String mess_img) {
		this.mess_img = mess_img;
	}
	public String getMess_title() {
		return mess_title;
	}
	public void setMess_title(String mess_title) {
		this.mess_title = mess_title;
	}
	public String getMess_desc() {
		return mess_desc;
	}
	public void setMess_desc(String mess_desc) {
		this.mess_desc = mess_desc;
	}
	@Override
	public String toString() {
		return "Bookmarks [id=" + id + ", userno=" + userno + ", busino=" + busino + ", mess_img=" + mess_img
				+ ", mess_title=" + mess_title + ", mess_desc=" + mess_desc + "]";
	}

	
}