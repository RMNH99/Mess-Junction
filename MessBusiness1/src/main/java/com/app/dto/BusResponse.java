package com.app.dto;

import org.springframework.stereotype.Component;

@Component
public class BusResponse {
private long o_no;

public long getO_no() {
	return o_no;
}

public void setO_no(long o_no) {
	this.o_no = o_no;
}

private Object object;

public Object getObject() {
	return object;
}

public void setObject(Object object) {
	this.object = object;
}

@Override
public String toString() {
	return "BusResponse [o_no=" + o_no + ", object=" + object + "]";
}




}
