import { Component, EventEmitter, Output, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-valor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './valor.component.html',
  styleUrl: './valor.component.css'
})
export class ValorComponent {
  @Input() valor?:number;
  @Output() valorEnviado = new EventEmitter<number>();

  enviarValor() {
    this.valorEnviado.emit(this.valor)
  }
}
