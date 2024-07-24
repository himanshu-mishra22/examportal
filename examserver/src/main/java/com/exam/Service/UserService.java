package com.exam.Service;

import com.exam.entity.User;
import com.exam.entity.UserRole;

import java.util.Set;

public interface UserService {
    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    User getUser(String username);

    void deleteUser(Long Id);

    User updateUser(Long userId,User user) throws Exception;


}
