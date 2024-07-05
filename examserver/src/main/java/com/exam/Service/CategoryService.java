package com.exam.Service;

import com.exam.entity.exam.Category;

import java.util.Set;

public interface CategoryService {
    public Category addCategory(Category category);
    public Category updateCategory (Category category);
    public Set<Category> getCategories();
    public Category getCategory (Long catId);
    public void deleteCategory (Long catId);
}
