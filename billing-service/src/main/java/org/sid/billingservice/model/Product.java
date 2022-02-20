package org.sid.billingservice.model;

import lombok.Data;

@Data
public class Product {
    private Long id;
    private double price;
    private String name ;
    private double quantity;
}
