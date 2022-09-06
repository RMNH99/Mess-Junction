package com.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Status;

@Repository
public interface StatusRepository extends CrudRepository<Status,Long> {

//	List<Status> findAllByO_no(long o_no);

}
