package com.MyProject.MyProject.UserRepository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.MyProject.MyProject.UserModel.FAQRequest;

public interface FAQFormRepository extends JpaRepository<FAQRequest, Long> {
}
