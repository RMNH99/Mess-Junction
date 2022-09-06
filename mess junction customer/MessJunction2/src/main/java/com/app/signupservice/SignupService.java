package com.app.signupservice;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.dto.Response;
import com.app.model.Login;
import com.app.model.Signup;

import com.app.repository.SignupRepository;
@Service
public class SignupService {
	@Autowired
	SignupRepository repo ;
	
	
	public Response addSignup(Signup signup) {
		// TODO Auto-generated method stub
		Signup s=new Signup();
		Signup s1;
		 Response response = new Response();
		 
		if (s!=null) {
			try {
				s1= repo.findById(signup.getMo_no()).get();
				if(s1.getFirst_name()!=null) {
					response.setObject(s);
				}
			}
			catch(Exception e){
				s=repo.save(signup);
				response.setObject(s);
				response.setMo_no(s.getMo_no());
			}
			 
		}
		return response;
	}
	
	

	public  Signup verifyLogin(Login login) {
		// TODO Auto-generated method stub
		Login l= login;
		 Response response = new Response();

		Signup s1;
		Signup s2= new Signup();
		 
		
		 if(repo.findById(l.getMo_no()).get() != null) {
			 
			 s1= repo.findById(l.getMo_no()).get();
			 
			 if(s1.getPassword().equals(l.getPassword())) {
					response.setMo_no(l.getMo_no());
					s2=s1;
					response.setObject(s2);
				}
		 }
			
		return s2;

}
	
	
	

		
}
