package com.exam.controller;


import com.exam.Service.QuizAttemptService;
import com.exam.Service.QuizService;
import com.exam.entity.exam.Quiz;
import com.exam.entity.exam.QuizAttempts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/attempts")
public class QuizAttemptsController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private QuizAttemptService quizAttemptService;


//    @GetMapping("/quiz/{qid}")
//     public ResponseEntity<?>getQuizAttempts(@PathVariable("qid") Long qid){
//        Quiz quiz = new Quiz();
//        quiz.setQid(qid);
//        List<QuizAttempts> attempts = this.quizAttemptService.getAttemptsForQuiz(quiz);
//        return ResponseEntity.ok(attempts);
//    }
//
//    @PostMapping("/")
//    public ResponseEntity<QuizAttempts> addAttempt(@RequestBody QuizAttempts quizAttempts){
//        return ResponseEntity.ok(this.quizAttemptService.addAttempt(quizAttempts));
//    }


    @PostMapping("/save")
    public ResponseEntity<QuizAttempts> saveQuizAttempt(@RequestBody QuizAttempts quizAttempt) {
        QuizAttempts savedAttempt = quizAttemptService.saveQuizAttempt(quizAttempt);
        return ResponseEntity.ok(savedAttempt);
    }

    @GetMapping("/all")
    public ResponseEntity<List<QuizAttempts>> getAllQuizAttempts() {
        List<QuizAttempts> quizAttempts = quizAttemptService.getAllQuizAttempts();
        return ResponseEntity.ok(quizAttempts);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<QuizAttempts>> getQuizAttemptsByUserId(@PathVariable Long userId) {
        List<QuizAttempts> quizAttempts = quizAttemptService.getQuizAttemptsByUserId(userId);
        return ResponseEntity.ok(quizAttempts);
    }

    @GetMapping("/quiz/{quizId}")
    public ResponseEntity<List<QuizAttempts>> getQuizAttemptsForQuiz(@PathVariable Long quizId) {
        Quiz quiz = quizService.getQuiz(quizId);
        if (quiz == null) {
            return ResponseEntity.notFound().build();
        }

        List<QuizAttempts> quizAttempts = quizAttemptService.getAttemptsForQuiz(quiz);
        return ResponseEntity.ok(quizAttempts);
    }


}
