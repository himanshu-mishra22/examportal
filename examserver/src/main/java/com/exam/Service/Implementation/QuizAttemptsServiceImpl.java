package com.exam.Service.Implementation;

import com.exam.Repo.QuizAttemptsRepo;
import com.exam.Service.QuizAttemptService;
import com.exam.Service.QuizService;
import com.exam.entity.exam.Quiz;
import com.exam.entity.exam.QuizAttempts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
@Service
public class QuizAttemptsServiceImpl implements QuizAttemptService {

    @Autowired
    private QuizAttemptsRepo quizAttemptsRepo;


    @Override
    public QuizAttempts saveQuizAttempt(QuizAttempts quizAttempt) {
        return quizAttemptsRepo.save(quizAttempt);
    }

    @Override
    public List<QuizAttempts> getAllQuizAttempts() {
        return quizAttemptsRepo.findAll();
    }

    @Override
    public List<QuizAttempts> getQuizAttemptsByUserId(Long userId) {
        return quizAttemptsRepo.findByUser_UserId(userId);
    }

    @Override
    public List<QuizAttempts> getAttemptsForQuiz(Quiz quiz) {
        return quizAttemptsRepo.findByQuiz(quiz);
    }
}
