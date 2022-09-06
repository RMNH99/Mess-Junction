package com.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;

//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Signup;


@Repository
public interface SignupRepository extends JpaRepository<Signup,Long>{
	

}

