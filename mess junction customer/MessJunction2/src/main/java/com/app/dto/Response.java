package com.app.dto;

import org.springframework.stereotype.Component;

@Component
public class Response {
	

		private Double dist;
		private long mo_no;
		private Object object;

		public long getMo_no() {
			return mo_no;
		}
		public void setMo_no(long mo_no) {
			this.mo_no = mo_no;
		}
		
		
		public Object getObject() {
			return object;
		}
		public void setObject(Object object) {
			this.object = object;
		}
		
		@Override
		public String toString() {
			return "Response [ object=" + object + "]";
		}
		public Double getDist() {
			return dist;
		}
		public void setDist(double dist) {
			// TODO Auto-generated method stub
			this.dist=dist;
		}
		 
		
}
