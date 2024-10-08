package com.exam.Service;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface QuizService{
    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);
    public Set<Quiz> getQuizzes();

    Quiz getQuiz(Long qId);

    public void deleteQuiz(Long  quizId);

    public List<Quiz> getQuizOfCategory(Category category);
    public List<Quiz>getActiveQuizzes();
    public List<Quiz>getActiveQuizCategory(Category category);

}
