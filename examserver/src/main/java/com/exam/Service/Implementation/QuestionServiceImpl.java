package com.exam.Service.Implementation;

import com.exam.Repo.QuestionRepo;
import com.exam.Service.QuestionService;
import com.exam.entity.exam.Questions;
import com.exam.entity.exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepo questionRepo;

    @Override
    public Questions addQuestion(Questions ques) {
        return this.questionRepo.save(ques) ;
    }

    @Override
    public Questions updateQuestion(Questions ques) {
        return this.questionRepo.save(ques);
    }

    @Override
    public Set<Questions> getQuestions() {
        return new HashSet<>(this.questionRepo.findAll());
    }

    @Override
    public void deleteQuestion(long questionId) {
        Questions questions = new Questions();
        questions.setQuesid(questionId);
        this.questionRepo.delete(questions);
    }

    @Override
    public Set<Questions> getQuestionFromQuiz(Quiz quiz) {
        return this.questionRepo.findByQuiz(quiz);
    }

    @Override
    public Questions getQuestion(Long quesId) {
        return this.questionRepo.findById(quesId).get();
    }
}
