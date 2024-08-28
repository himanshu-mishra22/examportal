package com.exam.controller;

import com.exam.Service.QuizAttemptService;
import com.exam.Service.QuizService;
import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private QuizAttemptService quizAttemptService;

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

    @GetMapping("/category/{cid}")
    public List<Quiz> getQuizOfCategory(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return this.quizService.getQuizOfCategory(category);
    }

    //get Active quizzes
    @GetMapping("/active")
    public List<Quiz>getActiveQuizzes(){
        return this.quizService.getActiveQuizzes();
    }

    //get Active quizzes of category
    @GetMapping("/category/active/{cid}")
    public List<Quiz>getActiveQuizzesOfCategory(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return this.quizService.getActiveQuizCategory(category);
    }

    @GetMapping("/valid/{userId}/{qid}")
    public ResponseEntity<Boolean> canUserTakeExam(@PathVariable("userId") Long userId, @PathVariable("qid") Long qid) {
        boolean hasTaken = quizAttemptService.hasUserTakenQuiz(userId, qid);
        return ResponseEntity.ok(!hasTaken);
    }
}