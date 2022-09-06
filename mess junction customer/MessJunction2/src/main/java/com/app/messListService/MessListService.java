package com.app.messListService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.app.dto.Response;
import com.app.model.Bookmarks;
import com.app.model.MessMenu;
import com.app.model.MessProfile;
import com.app.model.Status;
import com.app.repository.MessMenuRepository;
import com.app.repository.MessProfileRepository;
import com.app.repository.StatusRepository;
import com.app.repository.UserBookmarksRepository;

@Service
public class MessListService {
	
	
//	*****************Sending messlist by calculating distance************************
	@Autowired
	MessProfileRepository repo;
	public List<Response> messList(double latitude, double longitude, long radius) {
		
		List<Response> list = new ArrayList<>();
		
		 repo.findAll().forEach((i)->{
			 Response res= new Response();
			 double lon1 = Math.toRadians(i.getLongitude());
				double lon2 = Math.toRadians(longitude);
				double lat1 = Math.toRadians(i.getLattitude());
				double lat2 = Math.toRadians(latitude);
			 
			        // Haversine formula
			        double dlon = lon2 - lon1;
			        double dlat = lat2 - lat1;
			        double a = Math.pow(Math.sin(dlat / 2), 2)
			                 + Math.cos(lat1) * Math.cos(lat2)
			                 * Math.pow(Math.sin(dlon / 2),2);
			             
			        double c = 2 * Math.asin(Math.sqrt(a));
			 
			        // Radius of earth in kilometers 6371.
//			        to get distance in meter
			       double d = c*6371*1000;
//			       **************************************************************			      
			       if(d<=radius) {
			    	   res.setObject(i);
					      res.setDist(d);
			    	   list.add(res);
			       } 
		 });
		 
		return list;
	}
//	******************to send mess profile***********************************
public Optional<MessProfile> messProfileMethod(long messId) {
	
	Optional<MessProfile> p = repo.findById(messId);
	
	return p;
	
}
	
	
//	******************to send menu***********************************
	
	@Autowired
	MessMenuRepository menuRepo;
	public List<MessMenu> messMenuList(long id_no) {
		
		List<MessMenu> list = new ArrayList<>();

		list=menuRepo.findBybusinessId(id_no);
		
		return list;
		
	}
	
//	************************Status Service********************
	@Autowired
	StatusRepository statusrepo;
	public List<Status> showStatus(long id_no){
		
		List<Status> list = new ArrayList<>();

		list=statusrepo.findByono(id_no);
		return list;
	}
	
	
	
//	************************bookmarks*****************************
	@Autowired
	UserBookmarksRepository bookrepo;
//	get bookmarks
	public List<Bookmarks> getBookmarks(long userno){
		
		List<Bookmarks> list =bookrepo.findByuserno(userno);
		return list;
	}
//	add bookmark
   public void addBookmark(Bookmarks bookmark){
		Bookmarks b= bookmark;
		bookrepo.save(b);
	}
//  delete bookmark
   public void deleteBookmark(long userId, long messId){
	
	List<Bookmarks> list =bookrepo.findByuserno(userId);
	
	list.forEach((i)->{
		if(i.getBusino()==messId) {
			bookrepo.delete(i);
		}
	});
}
	
	
}
