package com.exam.controller;


import com.exam.Service.UserService;
import com.exam.entity.Roles;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserRole> roles = new HashSet<>();
        Roles role = new Roles();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");
        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);


        return this.userService.createUser(user,roles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username){
        return this.userService.getUser(username);
    }

    @DeleteMapping("/{Id}")
    public void deleteUser(@PathVariable("Id") Long Id){
        this.userService.deleteUser(Id);
    }
//
//    @PutMapping("/{userName}")
//    public User updateUser(@PathVariable("userName") String username, @RequestBody User user) throws Exception {
//        User existingUser = this.userService.getUser(username);
//        if (existingUser == null) {
//            throw new Exception("User not found");
//        }
//
//        user.setId(existingUser.getId()); // Ensure the correct ID is set
//        return this.userService.updateUser(user);
//    }


    @PutMapping
    public User updateUser(@RequestBody User user) throws Exception {
        User existingUser = this.userService.getUser(user.getUsername());
        if (existingUser == null) {
            throw new Exception("User not found");
        }

        return this.userService.updateUser(user);
    }



}
