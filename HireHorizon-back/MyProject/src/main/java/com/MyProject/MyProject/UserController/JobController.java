package com.MyProject.MyProject.UserController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.MyProject.MyProject.UserModel.JobModel;
import com.MyProject.MyProject.UserService.JobService;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:3000") 
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping("/add")
    public ResponseEntity<String> addJob(@RequestBody JobModel job) {
        try {
            System.out.println("Received job: " + job); // Debugging line
            jobService.saveJob(job);
            return ResponseEntity.ok("Job added successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add job");
        }
    }
}
