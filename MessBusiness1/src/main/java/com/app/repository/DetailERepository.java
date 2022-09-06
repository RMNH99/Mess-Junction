package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.BusDetails;

public interface DetailERepository  extends JpaRepository<BusDetails,Long>{

}
