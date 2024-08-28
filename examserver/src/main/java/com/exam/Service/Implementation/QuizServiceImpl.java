package com.exam.Service.Implementation;

import com.exam.Repo.QuizAttemptsRepo;
import com.exam.Repo.QuizRepo;
import com.exam.Repo.UserRepo;
import com.exam.Service.QuizService;
import com.exam.entity.User;
import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepo quizRepo;

    @Autowired
    private QuizAttemptsRepo quizAttemptsRepo;

    @Autowired
    private UserRepo userRepo;

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
//        Quiz quiz = new Quiz();
//        quiz.setQid(quizId);
        this.quizRepo.deleteById(quizId);
    }

    @Override
    public List<Quiz> getQuizOfCategory(Category category) {
        return this.quizRepo.findBycategory(category);
    }

    //get Active Quizzes
    @Override
    public List<Quiz> getActiveQuizzes() {
        return this.quizRepo.findByActive(true);
    }

    @Override
    public List<Quiz> getActiveQuizCategory(Category category) {
        return this.quizRepo.findByCategoryAndActive(category,true);
    }



}
