package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Status;

public interface StatusRepository extends JpaRepository<Status,Long>{

	List<Status> findByono(long id_no);

}
