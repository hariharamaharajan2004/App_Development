package com.MyProject.MyProject.UserController;

import com.MyProject.MyProject.UserModel.ContactForm;
import com.MyProject.MyProject.UserRepository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactFormController {

    @Autowired
    private ContactFormRepository contactFormRepository;

    @PostMapping
    public ResponseEntity<ContactForm> submitContactForm(@RequestBody ContactForm contactForm) {
        ContactForm savedContactForm = contactFormRepository.save(contactForm);
        return ResponseEntity.ok(savedContactForm);
    }
}
