package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.MessMenu;

public interface MenuRepository extends JpaRepository<MessMenu,String> {

}
