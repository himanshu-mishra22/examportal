package com.exam.Repo;

import com.exam.entity.User;
import com.exam.entity.exam.Quiz;
import com.exam.entity.exam.QuizAttempts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuizAttemptsRepo extends JpaRepository<QuizAttempts,Long> {
    List<QuizAttempts> findByUser_UserId(Long userId);

    List<QuizAttempts>findByQuiz(Quiz quiz);

    Optional<QuizAttempts>findByUserAndQuiz(User user,Quiz quiz);
}
