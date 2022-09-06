package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BusResponse;
import com.app.dto.Response;
import com.app.model.BusDetails;
import com.app.model.MessProfile;
import com.app.model.Signup;
import com.app.model.Status;
import com.app.repository.BusRepository;
import com.app.repository.DetailERepository;
import com.app.repository.MessProfileRepository;
import com.app.repository.StatusRepository;

@Service
public class BusService {
	@Autowired
	BusRepository bus ;
	@Autowired
	DetailERepository det;
	@Autowired
	StatusRepository stat;
	
	public BusResponse addBusDetails(BusDetails busdet) {
		BusDetails d=new BusDetails();
		
		
		d=det.save(busdet);
		
	//	Signup bussignup=new Signup();
		
//		bussignup.setBusdetails(d);
//		d=det.save(busdet);
		 BusResponse busresponse = new BusResponse();
		 
		 if(d!=null) {
			 busresponse.setObject(d); 
		 }else {
				
				busresponse.setObject(busdet);
				
			}
		 return busresponse;
	}
	
	
	public Response addSignup(Signup signup) {
		// TODO Auto-generated method stub
		
	
		Signup s=new Signup();
		s=bus.save(signup);

		 Response response = new Response();
		
		if (s!=null) {
			
			response.setObject(s);
			
		}else {
		
			response.setObject(signup);
			
		}
		
		return response;
		
	}
	
//	public void delete(Status status) {
//	stat.delete(status);
//	}
//	
//	
//	public List<Signup> list(){
//		return bus.findAll();
	
	
	
	@Autowired
	MessProfileRepository repo;
	public Optional<MessProfile> messProfileMethod(long messId) {
		
		Optional<MessProfile> p = repo.findById(messId);
		
		return p;
		
	}
		


		
}

