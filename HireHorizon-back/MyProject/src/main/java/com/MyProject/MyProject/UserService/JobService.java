package com.MyProject.MyProject.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyProject.MyProject.UserModel.JobModel;
import com.MyProject.MyProject.UserRepository.JobRepository;


@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public void saveJob(JobModel job) {
        jobRepository.save(job);
    }
}

