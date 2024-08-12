package com.MyProject.MyProject.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.MyProject.MyProject.UserModel.UserModel;

public interface UserInterface extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
}
