package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.CateringMenu;
import com.app.pojos.DecorMenu;
import com.app.pojos.EntertainmentMenu;
import com.app.pojos.User;
import com.app.pojos.VenueMenu;
import com.app.service.ICateringMenuService;
import com.app.service.IDecorMenuService;
import com.app.service.IEntertainmentMenuService;
import com.app.service.IUserService;
import com.app.service.IVenueMenuService;

@RestController
@RequestMapping("/api/user/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
 
	@Autowired
	private ICateringMenuService catMenuSer;
	@Autowired
	private IDecorMenuService decMenuSer;
	@Autowired
	private IEntertainmentMenuService entMenuSer;
	@Autowired
	private IUserService userService;
	@Autowired
	private IVenueMenuService venueSer;
	
	
	@GetMapping("/allusers")
	private List<User> getAllUsers(){
		return userService.getAllUser();
		
	}
	//venue-----admin
	@GetMapping("/allVenues")
	private List<VenueMenu> getallVenue(){
		return venueSer.getAllVenuesMenu();
		
	}
	@GetMapping("/venueid/{id}")
	private VenueMenu getVenById(@PathVariable int id) {
		return venueSer.getById(id);
		
	}
	@PostMapping("/addvenue")
	private int addVenue(@RequestBody VenueMenu venue) {
		venueSer.addVenueMenuByAdmin(venue);
		return venue.getId();
		
	}
	@PutMapping("/editvenue/{id}")
	private void editVenue(@RequestBody VenueMenu venue,@PathVariable int id) {
		venueSer.editVenueMenuByAdmin(venue, id);
	}
	
	@DeleteMapping("/deleteVenue/{venueid}")
	private void deleteVenue(@PathVariable("venueid") int id) {
		venueSer.deleteVenueMenuByAdmin(id);
	}
	
	
	
	//catering-----admin
	@GetMapping("/caterings")
	private List<CateringMenu> getAllCateringMenu(){
		return catMenuSer.getAllCateringMenu();
		
	}
	
	@PostMapping("/addCatering")  
	private int saveCatering(@RequestBody CateringMenu catMenu)   
	{  
	catMenuSer.addCateringMenuByAdmin(catMenu);  
	return catMenu.getId();
	}  
	@GetMapping("/cateringid/{id}")
	private CateringMenu getById(@PathVariable int id) {
		CateringMenu catMenu=catMenuSer.getById(id);
		return catMenu;
	}
	
	@PutMapping("/editCatering/{id}")  
	private void updateCatering(@RequestBody CateringMenu catMenu,@PathVariable int id)   
	{  
	catMenuSer.editCateringMenuByAdmin(catMenu, id);
	
	}  
	@DeleteMapping("/deleteCatering/{cateringid}")  
	private void deleteCatering(@PathVariable("cateringid") int id)   
	{  
		catMenuSer.deleteCateringMenuByAdmin(id);
	}  
	//decor-----------admin
	@GetMapping("/decors")
	private List<DecorMenu> getAllDecorMenu(){
		return decMenuSer.getAllDecorMenu();
		
	}
	
	@GetMapping("/decorid/{id}")
	private DecorMenu getByDecId(@PathVariable Integer id) {
		return decMenuSer.getById(id);
		
	}
	
	@PostMapping("/addDecor")  
	private int saveDecor(@RequestBody DecorMenu decMenu)   
	{  
	decMenuSer.addDecoreMenuByAdmin(decMenu);  
	return decMenu.getId();
	}  
	
	@PutMapping("/editDecor/{id}")  
	private void updateDecor(@RequestBody DecorMenu decMenu,@PathVariable int id)   
	{  
	decMenuSer.editDecorMenuByAdmin(decMenu, id);
	
	}  
	@DeleteMapping("/deleteDecor/{decorid}")  
	private void deleteDecor(@PathVariable("decorid") int id)   
	{  
		decMenuSer.deleteDecorMenuByAdmin(id);
	}  
	
	//entertain-----admin
	@GetMapping("/entertainments")
	private List<EntertainmentMenu> getAllEntertainmentMenu(){
		return entMenuSer.getAllEntertainmentMenu();
		
	}
	@GetMapping("/entertainmentid/{id}")
	private EntertainmentMenu getByEntId(@PathVariable Integer id) {
		return entMenuSer.getById(id);
		
	}
	
	@PostMapping("/addEntertainment")  
	private int saveEntertainment(@RequestBody EntertainmentMenu entMenu)   
	{  
	entMenuSer.addEntertainmentMenuByAdmin(entMenu); 
	return entMenu.getId();
	}  
	
	@PutMapping("/editEntertainment/{id}")  
	private void updateEntertainemnt(@RequestBody EntertainmentMenu entMenu,@PathVariable int id)   
	{  
	entMenuSer.editEntertainmentMenuByAdmin(entMenu, id);
	
	}  
	@DeleteMapping("/deleteEntertainment/{entid}")  
	private void deleteEntertainment(@PathVariable("entid") int id)   
	{  
		entMenuSer.deleteEntertainmentMenuByAdmin(id);
	}  
	
}
