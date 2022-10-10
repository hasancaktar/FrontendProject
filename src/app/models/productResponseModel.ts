import { Product } from "./product";
import { ResopnseModel } from "./responseModel";

export interface ProductResponseModel extends ResopnseModel{
    data:Product[],
}