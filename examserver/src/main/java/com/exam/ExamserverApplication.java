package com.exam;

import com.exam.Service.UserService;
import com.exam.entity.Roles;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.management.relation.Role;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {

	public static void main(String[] args)  {

		SpringApplication.run(ExamserverApplication.class, args);
	}

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Starting code....");

//		User user = new User();
//		user.setUsername("him123");
//		user.setPassword(this.bCryptPasswordEncoder.encode("mishra"));
//		user.setFirstName("Himanshu");
//		user.setLastName("Mishra");
//		user.setEmail("him@gmail.com");
//		user.setProfile("default.png");
//
//		Roles role1 = new Roles();
//		role1.setRoleName("ADMIN");
//		role1.setRoleId(44L);
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		userRoleSet.add(userRole);
//
//		User user1 = this.userService.createUser(user,userRoleSet);
//		System.out.println(user1.getUsername());



	}
}
