import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <img [src]="card.imagen" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{card.titulo}}</h5>
        <p class="card-subtitle mb-2 text-muted">{{card.subtitulo}}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 0 4px rgba(0,0,0,0.15);
      }
      .card-img-top {
        height: 200px;
        object-fit: cover;
      }
      .card-body {
        padding: 16px;
      }
      .card-title {
        font-size: 18px;
        font-weight: bold;
      }
      .card-subtitle {
        font-size: 14px;
        color: #777;
      }
    `
  ]
})
export class CardComponent {
  @Input() card: any;
}
