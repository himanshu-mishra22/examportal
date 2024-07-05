package com.exam.Service.Implementation;

import com.exam.Repo.UserRepo;
import com.exam.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =this.userRepo.findByUsername(username);
        if(user ==null){
            System.out.println("not found user");
            throw new UsernameNotFoundException("No user found");
        }
        return user;
    }
}
