package com.exam.Repo;

import com.exam.entity.exam.Questions;
import com.exam.entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepo extends JpaRepository<Questions,Long> {
    Set<Questions> findByQuiz(Quiz quiz);
}
