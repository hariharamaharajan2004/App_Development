package com.MyProject.MyProject.UserRepository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.MyProject.MyProject.UserModel.JobModel;


public interface JobRepository extends JpaRepository<JobModel, Long> {
}
