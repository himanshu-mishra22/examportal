package com.exam.Service.Implementation;

import com.exam.Repo.CateRepo;
import com.exam.Service.CategoryService;
import com.exam.entity.exam.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class CategoryServiceImpl implements CategoryService {


    @Autowired
    private CateRepo cateRepo;


    @Override
    public Category addCategory(Category category) {
        return this.cateRepo.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.cateRepo.save(category);
    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(this.cateRepo.findAll());
    }

    @Override
    public Category getCategory(Long catId) {
        return this.cateRepo.findById(catId).get() ;
    }

    @Override
    public void deleteCategory(Long catId) {
        Category category = new Category();
        category.setCid(catId);
        this.cateRepo.delete(category);
    }
}
