package com.MyProject.MyProject.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyProject.MyProject.UserModel.ContactForm;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {
}
