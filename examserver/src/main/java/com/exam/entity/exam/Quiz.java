package com.exam.entity.exam;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name ="quiz")
public class Quiz {

    public Quiz() {
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long qid;


    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(mappedBy = "quiz",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Questions>question = new HashSet<>();

    private String title;
    private String description;

    public Set<Questions> getQuestion() {
        return question;
    }

    public void setQuestion(Set<Questions> question) {
        this.question = question;
    }

    public String getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(String maxMarks) {
        this.maxMarks = maxMarks;
    }

    public String getQuesNums() {
        return quesNums;
    }

    public void setQuesNums(String quesNums) {
        this.quesNums = quesNums;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    private String maxMarks;
    private String quesNums;

    private boolean active = false;


    public Long getQid() {
        return qid;
    }

    public void setQid(Long qid) {
        this.qid = qid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }
}
