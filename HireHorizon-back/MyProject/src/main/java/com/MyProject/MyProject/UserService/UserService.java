package com.MyProject.MyProject.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.MyProject.MyProject.UserModel.UserModel;
import com.MyProject.MyProject.UserRepository.UserInterface;
import com.MyProject.MyProject.util.JwtUtil;

@Service
public class UserService {

    @Autowired
    private UserInterface userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // Changed to PasswordEncoder

    public void saveUser(UserModel user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encrypting the password before saving
        userRepository.save(user);
    }

    public UserModel authenticateUser(String email, String rawPassword) {
        UserModel user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(rawPassword, user.getPassword())) { // Matching encrypted password
            return user;
        }
        return null;
    }

    public String generateTokenForUser(UserModel user) {
        return JwtUtil.generateToken(user.getUsername());
    }

    public boolean validateToken(String token, UserModel user) {
        return JwtUtil.validateToken(token, user.getUsername());
    }

    public int getUserCount() {
        return (int) userRepository.count();
    }

    public UserModel getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public UserModel updateUser(Long id, UserModel user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            return userRepository.save(user);
        }
        return null;
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
