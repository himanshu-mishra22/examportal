package com.exam.Repo;

import com.exam.entity.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CateRepo extends JpaRepository<Category,Long> {
}
