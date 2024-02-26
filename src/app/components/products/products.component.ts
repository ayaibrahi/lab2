import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  store1:Store= new Store ('fashion',['Cairo', 'ALX'], '../assets/image2.webp')

  ClientName: string ='Aya'
  IsPurshased: boolean = true
  Isdiv : boolean = false;


  product1:IProduct={
    id : 123,
    name : 'Coat',
    quantity: 2,
    price: 3500,
    image: '../assets/logo3.jpg',
    categoryId:45698,
    category: 'cloth'
  }

  products:IProduct[];
  constructor(){
    this.products=[   
    {
      'id': 10,
      'name': "Izor Short Sleeves Buttoned Pique Polo Shirt - Dark Red",
      'price': 109,
      "category": "men's clothing",
      'categoryId': 3,
       'quantity': 1,
      "image": "../assets/1 (1).jpg"
      
      },
      {
      "id": 11,
      "name": "Casual Shirt - 100% cotton - standard fit ",
      "price": 109,
      "category": "men's clothing",
      'categoryId': 3,
      'quantity': 0,
      "image": "../assets/1 (3).jpg"

      },
 
      {
      "id": 13,
      "name": "Diadora Men Cotton Polo Shirt ",
      "price": 599,
      "category": "men's clothing",
      'categoryId': 3,
      'quantity': 3,
      "image": "../assets/1 (2).jpg"

      },
      {
      "id": 14,
      "name": "Pavone Beige Cole Splatter Pattern Polo Shirt - Black, Mustard & Blue",
      "price": 999.99,
      "category": "men's clothing",
      'categoryId': 3,
      'quantity': 0,
      "image": "../assets/1.jpg"
 
      },
      {
      "id": 15,
      "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 3,
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
 
      },
      {
      "id": 16,
      "name": "Lock and Love Women's Removable Hooded Leather Moto Jacket",
      "price": 29.95,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 4,
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
  
      },
      {
      "id": 17,
      "name": "Rain Jacket Windbreaker Striped Climbing Raincoats",
      "price": 900,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 3,
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
 
      },
      {
      "id": 18,
      "name": "MBJ Women's Solid Short Sleeve Striped Boat Neck V ",
      "price": 600,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 25,
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"

      },
      {
      "id": 19,
      "name": "Opna Women's Short Sleeve Moisture Striped  Neck V",
      "price": 800,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 30,
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
 
      },
      {
      "id": 20,
      "name": "DANVOUY Womens T Shirt Casual Cotton Striped Short",
      "price": 1500,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 8,
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"

      
      }
  ];
  this.filterproduct = this.products;
   }

  filterproduct: IProduct[] = [];
  selectedCategory: string = '';

  set filterproducts(value: string) {
    this.filterproduct = this.filterselectedproduct(value);
  }

  filterselectedproduct(value: string): IProduct[] {
    return value === '' ? this.products : this.products.filter((product: IProduct) => 
   // product.category.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
   product.category === value);
  }
   
  filterSearchProduct(value:string): IProduct[]{
    return this.products.filter((product: IProduct)=>
    product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
  }
  set listFilteredValue(value:string){
    this.filterproduct=this.filterSearchProduct(value)
  }




   // quantity 
decreaseQuantity(product: IProduct) {
  if (product.quantity > 0) {
    product.quantity--;

    if (product.quantity === 0) {
      this.filterproduct = this.filterproduct.filter(p => p.id !== product.id);
    }
  }
}

   toggleImage(){

    this.IsPurshased= ! this.IsPurshased   
    this.Isdiv= ! this.Isdiv   
   }
  }

