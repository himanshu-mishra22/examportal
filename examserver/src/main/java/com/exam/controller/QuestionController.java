package com.exam.controller;

import com.exam.Service.QuestionService;
import com.exam.Service.QuizService;
import com.exam.entity.exam.Questions;
import com.exam.entity.exam.Quiz;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    //add question
    @PostMapping("/")
    public ResponseEntity<Questions> add(@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.addQuestion(questions));
    }

    //update
    @PutMapping("/")
    public ResponseEntity<Questions>update(@RequestBody Questions questions){
        return ResponseEntity.ok(this.questionService.updateQuestion(questions));
    }

    //get
    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?>getQuestionsOfQuiz(@PathVariable("qid") Long qid){

         Quiz quiz = this.quizService.getQuiz(qid);
         Set<Questions>questions = quiz.getQuestion();
         List list = new ArrayList(questions);
         if(list.size() > Integer.parseInt(quiz.getQuesNums())){
             list = list.subList(0,Integer.parseInt(quiz.getQuesNums())+1);
         }
        Collections.shuffle(list);
         return ResponseEntity.ok(list);
    }

    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<?>getAllQuestions(@PathVariable("qid") Long qid){
        Quiz quiz = new Quiz();
        quiz.setQid(qid);
        Set<Questions> questionsSet = this.questionService.getQuestionFromQuiz(quiz);
        return ResponseEntity.ok(questionsSet);

    }



    //get mapping for single question
    @GetMapping("/{quesid}")
    public Questions get(@PathVariable("quesid") Long quesId){
        return this.questionService.getQuestion(quesId);
    }

    //delete
    @DeleteMapping("/{quesid}")
    public void delete(@PathVariable("quesid") Long quesId){
        this.questionService.deleteQuestion(quesId);
    }
}
