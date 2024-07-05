package com.exam.entity.exam;

import jakarta.persistence.*;

@Entity
public class Questions {

    public Questions() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long quesid;

    @Column(length = 3000)
    private String content;
    private String image;
    private String op1;
    private String op2;
    private String op3;

    public Long getQuesid() {
        return quesid;
    }

    public void setQuesid(Long quesid) {
        this.quesid = quesid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getOp1() {
        return op1;
    }

    public void setOp1(String op1) {
        this.op1 = op1;
    }

    public String getOp2() {
        return op2;
    }

    public void setOp2(String op2) {
        this.op2 = op2;
    }

    public String getOp3() {
        return op3;
    }

    public void setOp3(String op3) {
        this.op3 = op3;
    }

    public String getOp4() {
        return op4;
    }

    public void setOp4(String op4) {
        this.op4 = op4;
    }

    public String getAns() {
        return ans;
    }

    public void setAns(String ans) {
        this.ans = ans;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    private String op4;
    private String ans;


    @ManyToOne(fetch = FetchType.EAGER)
    private Quiz quiz;

}
