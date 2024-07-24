package com.exam.controller;

import com.exam.Service.Implementation.UserDetailServiceImpl;
import com.exam.config.JwtUtils;
import com.exam.entity.JwtReq;
import com.exam.entity.JwtResponse;
import com.exam.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:4200/")
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailServiceImpl userDetailService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtReq jwtReq) throws Exception {
        try{
            authenticate(jwtReq.getUsername(), jwtReq.getPassword());

        }
        catch (UsernameNotFoundException be){
            throw new Exception("Invalid Credentials, User not found"+be.getMessage());
        }
        //authenticate
        UserDetails userDetails = this.userDetailService.loadUserByUsername(jwtReq.getUsername());
        String token = this.jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));

    }





    private void authenticate(String username, String password) throws Exception {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));

        }catch(DisabledException e){
            throw new Exception("User disabled"+e.getMessage());
        }catch(BadCredentialsException e){
            throw new Exception("Invalid Credentials"+ e.getMessage());
        }
    }

    //to get the user detail of current user
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        return (User)this.userDetailService.loadUserByUsername(principal.getName());
    }



}
