package com.exam.Service;

import com.exam.Repo.QuizAttemptsRepo;
import com.exam.entity.exam.Quiz;
import com.exam.entity.exam.QuizAttempts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuizAttemptService {

    QuizAttempts saveQuizAttempt(QuizAttempts quizAttempt);

    List<QuizAttempts> getAllQuizAttempts();

    List<QuizAttempts> getQuizAttemptsByUserId(Long userId);

    List<QuizAttempts> getAttemptsForQuiz(Quiz quiz);

}
