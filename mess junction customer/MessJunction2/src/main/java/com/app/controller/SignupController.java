package com.app.controller;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.app.dto.Response;
import com.app.messListService.MessListService;
import com.app.model.Bookmarks;
import com.app.model.Login;
import com.app.model.MessMenu;
import com.app.model.MessProfile;
import com.app.model.Signup;
import com.app.model.Status;
import com.app.repository.SignupRepository;
import com.app.signupservice.SignupService;




@RestController
@RequestMapping("/")
@CrossOrigin
public class SignupController {
	
	
//	************************for Signup*******************************************
	
	@Autowired
	SignupService signupService;	
		
	@RequestMapping(value="/signup",method=RequestMethod.POST,consumes="application/json",produces ="application/json")
		
			public ResponseEntity<Response>addSignup(@RequestBody Signup signup){
				
		if(signup.signupCode().equals("yes")) {
		Response response =signupService.addSignup(signup);
		if(response.getMo_no()!=0) {
			return new ResponseEntity<Response>(response,HttpStatus.CREATED);
		}else {
			return new ResponseEntity <Response> ( HttpStatus.BAD_REQUEST);
		}
				}else {
					return new ResponseEntity <Response> ( HttpStatus.BAD_REQUEST);
					}
				}
		
	
//	************************for Login*******************************************

	
			@RequestMapping(value="/login", method=RequestMethod.POST,consumes="application/json",produces ="application/json")
			public Object getSignupByMo_no(@RequestBody Login login) {
				Signup s =signupService.verifyLogin(login);
				if(s.getFirst_name()!=null) {
					Response res = new Response();
					res.setObject(s);
					return res.getObject();
				}else {
					return new ResponseEntity <Response> ( HttpStatus.BAD_REQUEST);
				}
				
			}
			
			
//			************************To Send MessList*******************************************

			
			@Autowired
			MessListService messlistService;
			@PostMapping(value = "/sendMessList")
			public List<Response> validate(@RequestParam double latitude, @RequestParam double longitude, @RequestParam long radius) {
				
				List<Response> list = new ArrayList<>();

				list = messlistService.messList( latitude,longitude,radius);
				
				return list;
			}
			
//			************************To Send Mess Profile*******************************************
	
			@PostMapping(value = "/sendMessProfile")
			public Optional<MessProfile> validate(@RequestParam long messId) {
				
				Optional<MessProfile> p = messlistService.messProfileMethod(messId);
				
				return p;
			}
			
			
			
//			************************to Send Mess Menu*******************************************

			
			@PostMapping(value = "/sendMessMenu")
			public List<MessMenu> messMenuList(@RequestParam long id_no) {
				
				List<MessMenu> list = messlistService.messMenuList(id_no);
				
				return list;
			}
			
			
//			************************show Status to User***************************
			
			@PostMapping(value = "/status")
			public List<Status> statusList(@RequestParam long id_no) {
				
				List<Status> list = messlistService.showStatus(id_no);
				
				return list;
			}
			
			
//			****************************For Bookmarks**********************************

			@PostMapping(value = "/allbookmarks")
			public List<Bookmarks> bookmarks(@RequestParam long userId_no) {
				
				List<Bookmarks> list = messlistService.getBookmarks(userId_no);

				return list;
			}
			@RequestMapping(value = "/addbookmark",method=RequestMethod.POST,consumes="application/json",produces ="application/json")
			public void addbookmarks(@RequestBody Bookmarks bookmark) {
				messlistService.addBookmark(bookmark);
			}
			
			@PostMapping(value = "/deletebookmark")
			public void deletebookmarks(@RequestParam long userId, @RequestParam long messId) {
				
				messlistService.deleteBookmark(userId, messId);
			}
			
}
	
	
	
	
