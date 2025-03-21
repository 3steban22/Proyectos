import { Component, Inject, inject } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  products:any = [];
  productsService = inject(StoreService);

  ngOnInit(){
    this.getProducts();
  }

  async getProducts(){
    this.products = await this.productsService.getProducts();
  }
}

