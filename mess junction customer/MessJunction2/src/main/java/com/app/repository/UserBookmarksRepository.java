package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Bookmarks;

public interface UserBookmarksRepository extends JpaRepository<Bookmarks,Long>{

	List<Bookmarks> findByuserno(long userno);

	
}
