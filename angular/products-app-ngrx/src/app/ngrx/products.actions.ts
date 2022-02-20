import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsTypes{
  //get All products
  GET_ALL_PRODUCTS="[Products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All Error",

  //get selected products
  GET_SELECTED_PRODUCTS="[Products] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected Products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected Error",

  //search products
  SEARCH_PRODUCTS="[Products] Search Products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search Products Success",
  SEARCH_PRODUCTS_ERROR="[Products] Search Error",

  // select product
  SELECT_PRODUCT="[Products] Select Product",
  SELECT_PRODUCT_SUCCESS="[Products] Select Product Success",
  SELECT_PRODUCT_ERROR="[Products] Select Product Error",

  // delete products
  DELETE_PRODUCT="[Products] Delete Product",
  DELETE_PRODUCT_SUCCESS="[Products] Delete Product Success",
  DELETE_PRODUCT_ERROR="[Products] Delete Error",

  // New products
  NEW_PRODUCT="[Products] New Product",
  NEW_PRODUCT_SUCCESS="[Products] New Product Success",
  NEW_PRODUCT_ERROR="[Products] New Error",

  // Save products
  SAVE_PRODUCT="[Products] Save Product",
  SAVE_PRODUCT_SUCCESS="[Products] Save Product Success",
  SAVE_PRODUCT_ERROR="[Products] Save Error",

  // Edit product
  EDIT_PRODUCT="[Products] Edit Product",
  EDIT_PRODUCT_SUCCESS="[Products] Edit Product Success",
  EDIT_PRODUCT_ERROR="[Products] Edit Error",

  // Update product
  UPDATE_PRODUCT="[Products] Update Product",
  UPDATE_PRODUCT_SUCCESS="[Products] Update Product Success",
  UPDATE_PRODUCT_ERROR="[Products] Update Error",
}

export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

//get selected products Action
export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

//Search products Action
export class SearchProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload:string) {
  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

//Select product Action
export class SelectProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class SelectProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class SelectProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

//Delete product Action
export class DeleteProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class DeleteProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class DeleteProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

//New product Action
export class NewProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT;
  constructor(public payload:any) {
  }
}

export class NewProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}

export class NewProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

//Save product Action
export class SaveProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class SaveProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class SaveProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

//Edit product Action
export class EditProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.EDIT_PRODUCT;
  constructor(public payload:number) {
  }
}

export class EditProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class EditProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

//Update product Action
export class UpdateProductAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUCT;
  constructor(public payload:Product) {
  }
}

export class UpdateProductActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}

export class UpdateProductActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

export type ProductsActions=
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  |GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
  |SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
  |SelectProductAction | SelectProductActionSuccess | SelectProductActionError
  |DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError
  |NewProductAction | NewProductActionSuccess | NewProductActionError
  |SaveProductAction | SaveProductActionSuccess | SaveProductActionError
  |EditProductAction | EditProductActionSuccess | EditProductActionError
  |UpdateProductAction | UpdateProductActionSuccess | UpdateProductActionError
  ;
