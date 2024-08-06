package com.example.demo11.service;

import com.example.demo11.model.JobPosting;
import com.example.demo11.repository.JobPostingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobPostingService {

    @Autowired
    private JobPostingRepository jobPostingRepository;

    public List<JobPosting> getAllJobPostings() {
        return jobPostingRepository.findAll();
    }

    public Optional<JobPosting> getJobPostingById(Long id) {
        return jobPostingRepository.findById(id);
    }

    public JobPosting createJobPosting(JobPosting jobPosting) {
        return jobPostingRepository.save(jobPosting);
    }

    public JobPosting updateJobPosting(Long id, JobPosting jobPostingDetails) {
        JobPosting jobPosting = jobPostingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("JobPosting not found for this id :: " + id));

        jobPosting.setJobTitle(jobPostingDetails.getJobTitle());
        jobPosting.setCompany(jobPostingDetails.getCompany());
        jobPosting.setLocation(jobPostingDetails.getLocation());
        jobPosting.setJobType(jobPostingDetails.getJobType());
        jobPosting.setSalary(jobPostingDetails.getSalary());
        jobPosting.setDate(jobPostingDetails.getDate());

        return jobPostingRepository.save(jobPosting);
    }

    public void deleteJobPosting(Long id) {
        JobPosting jobPosting = jobPostingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("JobPosting not found for this id :: " + id));
        jobPostingRepository.delete(jobPosting);
    }
}
