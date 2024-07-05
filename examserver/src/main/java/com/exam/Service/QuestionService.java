package com.exam.Service;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Questions;
import com.exam.entity.exam.Quiz;

import java.util.Set;

public interface QuestionService {


    public Questions addQuestion(Questions ques);
    public Questions updateQuestion(Questions ques);
    public Set<Questions> getQuestions();
    public void deleteQuestion(long questionId);
    public Set<Questions> getQuestionFromQuiz(Quiz quiz);
    public Questions getQuestion(Long quesId);
}
