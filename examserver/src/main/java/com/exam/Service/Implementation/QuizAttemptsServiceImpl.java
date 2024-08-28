package com.exam.Service.Implementation;

import com.exam.Repo.QuizAttemptsRepo;
import com.exam.Repo.QuizRepo;
import com.exam.Repo.UserRepo;
import com.exam.Service.QuizAttemptService;
import com.exam.Service.QuizService;
import com.exam.entity.User;
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

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private QuizRepo quizRepo;


    @Override
    public QuizAttempts saveQuizAttempt(Long qid, Long userId, QuizAttempts quizAttempt) {
        Quiz quiz = new Quiz();
        quiz.setQid(qid);

        User user = new User();
        user.setUserId(userId);

        quizAttempt.setQuiz(quiz);
        quizAttempt.setUser(user);
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

    @Override
    public Boolean hasUserTakenQuiz(Long userId, Long qid) {
        User user = userRepo.findById(userId).orElseThrow(()-> new RuntimeException("User not found"));
        Quiz quiz = quizRepo.findById(qid).orElseThrow(()-> new RuntimeException("Quiz not found"));
        return quizAttemptsRepo.findByUserAndQuiz(user,quiz).isPresent();
    }


}
