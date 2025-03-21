import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronted';
  ciudad = 'Cali';
  n1: number = 19;
  n2: number = 21;
  n3: number = 143;
  resultado: number=0;

  ngOnInit(): void{
    this.multiplicar(30,12);
  }

  multiplicar(n5:number,n6:number): void{
    this.resultado =n5*n6;
  }
}
