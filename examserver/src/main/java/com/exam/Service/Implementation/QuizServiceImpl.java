package com.exam.Service.Implementation;

import com.exam.Repo.QuizRepo;
import com.exam.Service.QuizService;
import com.exam.entity.exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepo quizRepo;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new HashSet<>(this.quizRepo.findAll());
    }

    @Override
    public Quiz getQuiz(Long qId) {
        return this.quizRepo.findById(qId).get() ;
    }

    @Override
    public void deleteQuiz(Long quizId) {
        Quiz quiz = new Quiz();
        quiz.setQid(quizId);
        this.quizRepo.delete(quiz);
    }
}
