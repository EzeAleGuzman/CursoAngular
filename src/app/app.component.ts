import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component' ;
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular12';
  cards: any []= [
    { titulo: 'Título 1', subtitulo: 'Subtítulo 1', imagen: 'imagen1.jpg' },
    { titulo: 'Título 2', subtitulo: 'Subtítulo 2', imagen: 'imagen2.jpg' },
    { titulo: 'Título 2', subtitulo: 'Subtítulo 2', imagen: 'imagen2.jpg' },
    { titulo: 'Título 2', subtitulo: 'Subtítulo 2', imagen: 'imagen2.jpg' },
    { titulo: 'Título 2', subtitulo: 'Subtítulo 2', imagen: 'imagen2.jpg' },
  ];
}

