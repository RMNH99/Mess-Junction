package com.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BusResponse;
import com.app.dto.Response;
import com.app.model.BusDetails;
import com.app.model.MessMenu;
import com.app.model.MessProfile;
import com.app.model.Signup;
import com.app.model.Status;
import com.app.repository.BusRepository;
import com.app.repository.DetailERepository;
import com.app.repository.MenuRepository;
import com.app.repository.StatusRepository;
import com.app.service.BusService;

@RestController
@RequestMapping("/")

@CrossOrigin
public class BusController {
	
		
		@Autowired
		private BusRepository bus;  
		@Autowired
		BusService bsService;
		@Autowired
		private DetailERepository det;
		@Autowired	
		private MenuRepository menu;		
		@Autowired
		private StatusRepository stat;
		
	//******************Save the Signup details of mess owner **********************************
		
		@RequestMapping(value="/addsignup",method=RequestMethod.POST,consumes="application/json",produces ="application/json")
			
				public ResponseEntity<Response>addSignup(@RequestBody Signup bussignup){
					
			if(bussignup.signupCoding().equals("yes")) {
				//BusDetails busd=new BusDetails();
			Response response =bsService.addSignup(bussignup);
					return new ResponseEntity<Response>(response,HttpStatus.CREATED);
			}else {
				
					return new ResponseEntity<Response>( HttpStatus.BAD_REQUEST);}
				}

		
		//************************to  save details of mess after mo.bo,password,email sequrity check**********
		
		
		@RequestMapping(value="/adddetail",method=RequestMethod.POST,consumes="application/json",produces ="application/json")
			
				public ResponseEntity<BusResponse>addBusDetails(@RequestBody BusDetails busdetails){
					
			if(busdetails.detail().equals("yes")) {
			BusResponse busresponse =bsService.addBusDetails(busdetails);
					return new ResponseEntity<BusResponse>(busresponse,HttpStatus.CREATED);
			}else {
				
					return new ResponseEntity<BusResponse>( HttpStatus.BAD_REQUEST);}
				}
		
		
		//*************************to save Details of mess*****************************
		
		@PostMapping("/adddetails")
		public BusDetails saveBusDetails(@RequestBody BusDetails busdetail ) {
			return det.save(busdetail);
		}
		
		
		
		//************************to save menu Data in database******************************
		
		@PostMapping("/addmenu")
		public MessMenu saveMessMenuDetails(@RequestBody MessMenu messmenu ) {
			return menu.save(messmenu);
		}
		
		
		

	//*****************************Fetch the Owner data for login***************************
		@PostMapping("/login")
		public Response getSignupByO_no(@RequestParam("o_no") long o_no, @RequestParam("password") String pass) {
			Response res = new Response();
			Signup s= new Signup();
			try {
				 s = bus.findById(o_no).get();
				if(s.getPassword().equals(pass)) {
					try {
						BusDetails b= det.findById(s.getO_no()).get();
						if(b.getMname()!=null) {
				           res.setO_no(b.getO_no());
				           res.setObject(s);
				           return res;
						}else {
							res.setObject(s);
							return res;
						}
					}catch(Exception e){
						res.setObject(s);
						return res;
					}
						
					}else {
						return res;
					}
			}catch(Exception e){
				return res;
			}				
				
		}
//*********************//To Save the BusDetails After login if there is busdetail is null*************
				
//				if(s!=null) {
//					s.getO_no();
//					BusDetails b= det.findById(s.getO_no()).get();
//					if(b==null) {
//			           
//						return s;
//					}
//				}
				
				
		
		
		//*************************to Save Status photos in database************************
		@RequestMapping(value="/status",method=RequestMethod.POST,consumes="application/json",produces ="application/json")
		public Status saveStatus(@RequestBody Status status ) {
			Status s = status;
			return stat.save(s);
		}
		
		
		//***********************to fetch Status from database******************************
	
	//	@PostMapping("/fetchstatus")
//		@Modifying 
//		@Query("select * from status st where st.o_no=:o_no")
//		public  List<Status>  getStatusByO_no(@RequestParam ("o_no")long o_no) {
//				List<Status> st = stat.findByO_no(o_no);
////				List<Status> list=getStatusByO_no(o_no);
////				List<Status> list=new ArrayList<>();
////				List <Status>list= stat.findAllByO_no(o_no);
//				
//				
//				return st;
		
		
		
//			publiclist(){
//	return repo.findAll();	}
	//	
		
		//}
		
		//***********************to Delete the Status in database***************************
//		@PostMapping("/deletestatus")
//		@Modifying 
//		@Query("delete from status st where st.o_no=:o_no")
//	public	long deleteStatus(@Param("id")int id) {
//		return	stat.deleteById( id);
//		}
		
		
		//***********************to send the profile****************************

		@PostMapping(value = "/sendMessProfile")
		public Optional<MessProfile> validate(@RequestParam long messId) {
			
			Optional<MessProfile> p = bsService.messProfileMethod(messId);
			
			return p;
		}
}
