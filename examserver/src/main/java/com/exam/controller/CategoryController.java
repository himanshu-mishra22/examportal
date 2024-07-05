package com.exam.controller;


import com.exam.Service.CategoryService;
import com.exam.entity.exam.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    //add Category
    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category category1 = this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);
    }

    //getCategory
    @GetMapping("/{cid}")
    public Category getCategory(@PathVariable("cid") Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }

    //get all category
    @GetMapping("/")
    public ResponseEntity<?>getCategory(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    //update
    @PutMapping("/")
    public Category updateCategory (@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

    //delete category
    @DeleteMapping("/{cid}")
    public void deleteCategory(@PathVariable("cid") Long categoryId){
        this.categoryService.deleteCategory(categoryId);

    }

}
