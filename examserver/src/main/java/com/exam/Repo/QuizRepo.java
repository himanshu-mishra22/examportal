package com.exam.Repo;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepo extends JpaRepository<Quiz,Long> {
    public List<Quiz> findBycategory(Category category);

    public List<Quiz>findByActive(Boolean b);
    public List<Quiz>findByCategoryAndActive(Category c, Boolean b);
}
