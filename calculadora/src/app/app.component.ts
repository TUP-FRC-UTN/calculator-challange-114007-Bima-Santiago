import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValorComponent } from './valor/valor.component';
import { ResultadoComponent } from './resultado/resultado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValorComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  valor1:number = 0;
  valor2:number = 0;

  resultado:number = 0;

  leerValor1(value:number) {
    this.valor1 = value;
  }
  leerValor2(value:number) {
    this.valor2 = value;
  }

  suma = () => this.resultado = this.valor1 + this.valor2;
  resta = () => this.resultado = this.valor1 - this.valor2;
  potencia = () => this.resultado = Math.pow(this.valor1, this.valor2);
  multiplicacion = () => this.resultado = this.valor1 * this.valor2;
  division = () => this.resultado = this.valor1 / this.valor2;
  borrar = () => {
    this.resultado = 0;
  }
}
