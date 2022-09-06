package com.app.model;


import java.util.regex.Pattern;

import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Table(name = "signup")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Signup {
	
	@Id 
	private long mo_no;
	private String  first_name;
	private String last_name;
	private String email;
	private long bookmarks;
	private String password;


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
		
		public long getMo_no() {
			return mo_no;
		}
		public void setMo_no(long mo_no) {
			this.mo_no = mo_no;
		}
		
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
	
		public long getBookmarks() {
			return bookmarks;
		}
		public void setBookmarks(long bookmarks) {
			this.bookmarks = bookmarks;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		
		
	//************************************************SignupCode Method*******************************************

	public String signupCode() {

			System.out.print("\t\t\t\t\t====================_Sign Up_====================\n\n");
				
			
		//	Scanner sc= new Scanner (System.in);


		
	//..................to validate email id......................
		Pattern pattern;
			
		String email_regex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

	    pattern = Pattern.compile(email_regex);
	   
//	    pattern.matcher(email).matches().equals(true);
	    	
	    if(pattern.matcher(email).matches()==true){
	    	 if (password.length()>=8) {
    	  		
	    		String mono=String.valueOf(mo_no);
	 			
	 			if(mono.length()==10 ){
	 			System.out.println("\t\t\t\t\t*Please enter correct mobile number it must be 10 digit.\n");
	 			return "yes";
	 			}
	    	 }
	    } else {
				
				return "no";
			}
//	    		 System.out.println("\t\t\t\t\t*Please Enter 8 Character at least\n");
//    	  	 	return "yes";
//    	  	}else {
//    			
//    			return "no";
//    		}
////	    	System.out.println("\t\t\t\t\t*Enter valid Email ID.  Ex : abcd@abc.com");
//	    		return "yes";
//		
//	}else {
//		
//		return "no";
//	}
		return email_regex;

		
		
	//............................Password............................................
		

	    
	    //Checks to see if password is at least 8 characters. 
	   
	     
//	    	  	 if (password.length()<=7) {
//	    	  		 System.out.println("\t\t\t\t\t*Please Enter 8 Character at least\n");
//	    	  	 	return "yes";
//	    	  	}else {
//	    			
//	    			return "no";
//	    		}
//	    	  	 
//	    
//	       System.out.print("Confirm Password : ");
//	       String confirm_password=sc.next();
//	       
//	       if(!confirm_password.equals(password)) {
//	    	   do {
//	    		   System.out.println("\t\t\t\t\t*Your Password didn't Match \n ");
//	    		   System.out.print("Re-Enter Password :");
//	    		   password=sc.next();
//	    		   
//	    		   System.out.print("Confirm Password : ");
//	    		   confirm_password=sc.next();
//	    		   
//	    	   }while(!confirm_password.equals(password));
//	       }

//	       System.out.println("What is  name of your Favorite Pet/Dish/Place \nIt should be just one word answer :");
//	   	sequrity_answer=sc.next();
//	
		
	//***************************Mobile Number**********************
		
//	     String mono;
//

//			mono=String.valueOf(mo_no);
//			
//			if((mono.length()<10 )|| (mono.length()>10 )){
//			System.out.println("\t\t\t\t\t*Please enter correct mobile number it must be 10 digit.\n");
//			return "yes";
//			}else {
//				
//				return "no";
//			}
//			
//			}while((mono.length()<10 )|| (mono.length()>10 ));
//		
//	 long id=mo_no;
		
//		return "yes";
//	}
//
//	@Override
//	public String toString() {
//		return "Signup [first_name=" + first_name + ", last_name=" + last_name + ", email=" + email + ", password="
//				+ password + ", sequrity_answer=" + sequrity_answer + ", mo_no=" + mo_no + "]";
//	}

	
//	public  Signup get() {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
}