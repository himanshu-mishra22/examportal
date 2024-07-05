package com.exam.Repo;

import com.exam.entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepo extends JpaRepository<Quiz,Long> {
}
