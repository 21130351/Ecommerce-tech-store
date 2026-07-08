package com.techstore.backend.service;

import com.techstore.backend.modal.Home;
import com.techstore.backend.modal.HomeCategory;

import java.util.List;

public interface HomeService {

    public Home createHomePageData(List<HomeCategory> allCategories);
}
