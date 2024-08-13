package com.MyProject.MyProject.UserService;

import com.MyProject.MyProject.UserModel.FAQRequest;
import com.MyProject.MyProject.UserRepository.FAQFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FAQService {

    @Autowired
    private FAQFormRepository faqFormRepository;

    public FAQRequest submitQuestion(FAQRequest faqRequest) {
        return faqFormRepository.save(faqRequest);
    }
}
