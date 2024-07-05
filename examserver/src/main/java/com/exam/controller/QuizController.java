package com.exam.controller;

import com.exam.Service.QuizService;
import com.exam.entity.exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    //add quiz service
    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz
    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));

    }

    //get the quiz

    //all quiz

    @GetMapping("/")
    public ResponseEntity<?>quizzes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    //single quiz
    @GetMapping("/{qid}")
    public Quiz quiz(@PathVariable("qid") Long qid){
        return this.quizService.getQuiz(qid);
    }

    //delete a quiz
    @DeleteMapping("/{qid}")
    public void delete(@PathVariable("qid") Long qid){
        this.quizService.deleteQuiz(qid);
    }
}