package com.exam.Service.Implementation;

import com.exam.Repo.RoleRepo;
import com.exam.Repo.UserRepo;
import com.exam.Service.UserService;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;


    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User temp = this.userRepo.findByUsername(user.getUsername());
        if(temp != null){
            throw new Exception("User already there.");
        }else{
            //creating user
            for(UserRole ur: userRoles){
                roleRepo.save(ur.getRole());
            }
            user.getUserRole().addAll(userRoles);
            temp=this.userRepo.save(user);

        }
        return temp;
    }

    @Override
    public User getUser(String username) {
        return this.userRepo.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepo.deleteById(userId);
    }

    @Override
    public User updateUser(User user) {
        User local = this.userRepo.findByUsername(user.getUsername());
        if(local == null){
            System.out.println("No user found!");
        }
        local.setUsername(user.getUsername());
        local.setPassword(user.getPassword());
        local.setFirstName(user.getFirstName());
        local.setLastName(user.getLastName());
        local.setEmail(user.getEmail());
        local.setPhone(user.getPhone());
        local.setProfile(user.getProfile());

        return this.userRepo.save(local);
    }
}
