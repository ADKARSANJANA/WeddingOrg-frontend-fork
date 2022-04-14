package com.app.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserRequestDto;
import com.app.pojos.Booking;
import com.app.pojos.CateringMenu;
import com.app.pojos.DecorMenu;
import com.app.pojos.EntertainmentMenu;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.pojos.VenueMenu;
import com.app.service.IBookingService;
import com.app.service.ICateringService;
import com.app.service.IDecorService;
import com.app.service.IEntertainmentService;
import com.app.service.IUserService;
import com.app.service.IVenueMenuService;
import com.app.service.IVenueService;

@RestController
@RequestMapping("/api/user/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
	private ICateringService catSer;
	@Autowired
	private IUserService userSer;
	@Autowired
	private IBookingService bookser;
	@Autowired
	private IVenueMenuService venueMenuSer;
	@Autowired
	 private IVenueService venueService;
	@Autowired
	private IDecorService decSer;
	@Autowired
	private IEntertainmentService entSer;
	
	@PostMapping("/selectdate")
	private ResponseEntity<?> selectdate(@RequestBody UserRequestDto request ){
		User user=request.getUser();
		return new ResponseEntity<>(userSer.addBookingDateByCustomer(user),HttpStatus.OK);
		
	}
	
	@GetMapping("/getvenues")
	public ResponseEntity<?> getAllVenues(){
		
		System.out.println("in all venues method");
		return new ResponseEntity<>(venueMenuSer.getAllVenuesMenu(),HttpStatus.OK);
		}
	
	
	@PostMapping("/selectVenue")
	public  ResponseEntity<?> selectVenueByCust(@RequestBody  @Valid VenueMenu venueMenu){
		System.out.println("in select venue by custm method");
		
		return new ResponseEntity<>(venueService.selectVenueByCustomer(venueMenu),HttpStatus.OK);
	}
	
	@PostMapping("/addVenue")
	public ResponseEntity<?> addVenueByCust(@RequestBody UserRequestDto request) {
		/*@Valid Venue venue,@PathVariable int userid*/
		//User user=userSer.getById(userid);//here we are not getting user --getting empty entity excep
		User  user=request.getUser();
		//Venue venue=new Venue();
		
		
		
		return new ResponseEntity<>(userSer.addSelectedVenueByCustomer(user),HttpStatus.OK);
		
	}
	
	@GetMapping("/catering")
	public ResponseEntity<?> getAllCatering(){
		
		System.out.println("in all catering method");
		//return new ResponseEntity<>(catService.addCatering(cat.getFoodName()),HttpStatus.OK);
		return new ResponseEntity<>(catSer.getallCaterings(),HttpStatus.OK);
		}
	@PostMapping("/selectCaterings")
	public ResponseEntity<?> selectCateringByCustomer(@RequestBody @Valid List<CateringMenu> cateringMenu){
		
		return new ResponseEntity<>(catSer.saveInCatering(cateringMenu),HttpStatus.OK);
		
	}
	
	@PostMapping("/addCatering")
	public ResponseEntity<?> addCateringByCustomer(@RequestBody UserRequestDto request){
		/* @RequestBody @Valid List<Catering> catering, */
		//User user=userSer.getById(userid);//here we are not getting user --getting empty entity excep
		User user=request.getUser();
	
//		//user.setId(userid);
//		if(user!=null) {
//			user.setCatering(catering);
//		}
//		else 
//			System.out.println("user not available");
//		
		return new ResponseEntity<>(userSer.addSelectedCateringByCustomer(user),HttpStatus.OK);
		
	}
	
	@GetMapping("/alldecor")
	public ResponseEntity<?> getAllDecor(){
		return new ResponseEntity<>(decSer.getalldecor(),HttpStatus.OK);
	}
	
	
	@PostMapping("/selectdecor")
	public ResponseEntity<?> selectDecorByCustomer(@RequestBody @Valid List<DecorMenu> decorMenu){
		return new ResponseEntity<>(decSer.saveInDecor(decorMenu),HttpStatus.OK);
	}
	
	@PostMapping("/adddecor")
	public ResponseEntity<?> addDecorByCustomer(@RequestBody UserRequestDto request){
		/* @RequestBody @Valid List<Decor> decor, */
		//User user=userSer.getById(userid);//here we are not getting user --getting empty entity excep
		User user=request.getUser();
//		if(user!=null) {
//			user.setDecor(decor);
//		}
//		
		return new ResponseEntity<>(userSer.addSelectedDecorByCustomer(user),HttpStatus.OK);
	}
	
	@GetMapping("/allentertainment")
	public ResponseEntity<?> getAllEntertainment(){
		return new ResponseEntity<>(entSer.getallEntertainment(),HttpStatus.OK);
	}
	
	@PostMapping("/selectentertainment")
	public ResponseEntity<?> selectEntertainByCustomer(@RequestBody @Valid List<EntertainmentMenu> entMenu){
		return new ResponseEntity<>(entSer.saveInEntertainment(entMenu),HttpStatus.OK);
	}
	
	@PostMapping("/addentertain")
	public ResponseEntity<?> addEntByCustomer(@RequestBody UserRequestDto request){
		/* @RequestBody @Valid List<Entertainment> ent, */
		//User user=userSer.getById(userid);//here we are not getting user --getting empty entity excep
		User user=request.getUser();
//		if(user!=null) {
//			user.setEntertain(ent);
//		}
		
		return new ResponseEntity<>(userSer.addSelectedDecorByCustomer(user),HttpStatus.OK);
	}

}
