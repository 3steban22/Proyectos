import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  async getProducts(){
    const res = await fetch ('https://fakestoreapi.com/Products');
    return res.json();
  }
}
