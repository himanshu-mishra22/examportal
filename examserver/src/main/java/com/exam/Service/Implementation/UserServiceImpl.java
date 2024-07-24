package com.exam.Service.Implementation;

import com.exam.Repo.RoleRepo;
import com.exam.Repo.UserRepo;
import com.exam.Service.UserService;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



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
    public User updateUser(Long userId, User user) throws Exception {
        User existing = this.userRepo.findById(userId).orElseThrow(()-> new UsernameNotFoundException("user not found"));

        //updating fields
        existing.setFirstName(user.getFirstName());
        existing.setLastName(user.getLastName());
//        existing.setPassword(user.getPassword());
        existing.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        existing.setPhone(user.getPhone());
        existing.setEmail(user.getEmail());

        //save
        return this.userRepo.save(existing);

    }

}
