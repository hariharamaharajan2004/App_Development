package com.MyProject.MyProject.UserController;

import com.MyProject.MyProject.UserModel.FAQRequest;
import com.MyProject.MyProject.UserService.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faq")
public class FAQFormController {

    @Autowired
    private FAQService faqService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitQuestion(@RequestBody FAQRequest request) {
        FAQRequest savedFAQ = faqService.submitQuestion(request);
        return ResponseEntity.ok("Question submitted with ID: " + savedFAQ.getId());
    }
}
