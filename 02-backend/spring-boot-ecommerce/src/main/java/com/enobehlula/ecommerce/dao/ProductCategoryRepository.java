package com.enobehlula.ecommerce.dao;

import com.enobehlula.ecommerce.Entity.ProducutCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin("http://localhost:4200")         //Name of Json entry |     /product-category
@RepositoryRestResource(collectionResourceRel = "productCategory" , path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProducutCategory, Long> {

}
