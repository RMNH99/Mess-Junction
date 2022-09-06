package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.Response;
import com.app.model.MessMenu;
import com.app.model.Signup;

public interface MessMenuRepository extends JpaRepository<MessMenu,Long>{

	List<MessMenu> findBybusinessId(long id_no);

}
