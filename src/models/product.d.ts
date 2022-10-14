export interface productList{
  id: number,
  productName: string,
  sku: string,
  codeIntregration: string,
  descriptio: string,
  price: number,
  brandId: number,
  brand: brandList,
  productCategoryId: number,
  productCategory: productCategoryList,
  state:1,
  active: 1,
  dateUpdate:Date
}
export interface brandList{
  id: number,
 nombre:string,
 estado:boolean
}

export interface productCategoryList{
  id: number,
  nameCategory: string,
  state:string
}