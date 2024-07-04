import { Component, signal } from '@angular/core';
import { BlogCardComponent } from '@/app/dashboard/components/blog-card/blog-card.component';
import { BlogCardItem } from '@/app/dashboard/interfaces/blog-card-item.interface';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export default class BlogPageComponent {
  public blogCardItems = signal<BlogCardItem[]>([
    {
      blogImage:
        'https://media.istockphoto.com/id/1344021497/es/foto/joven-feliz-con-bandera-de-gran-breta%C3%B1a-trabajando-en-escritorio-con-computadora-port%C3%A1til-en.jpg?s=612x612&w=0&k=20&c=iGtv8_xENNcPr7slBKuRdsItu7JuI5vhFnpijNRdNFY=',
      blogDate: 'Diciembre 22, 2023',
      blogTitle: 'Palabras en Inglés',
      blogDescription:
        'El inglés tiene aproximadamente 1,000,000 de palabras, aunque en el día a día, la mayoría de las personas utiliza solo alrededor de 2,800',
    },
    {
      blogImage:
        'https://media.istockphoto.com/id/525409405/es/foto/vista-trasera-de-estudiantes-adolescentes-levantando-la-mano-en-el-aula.jpg?s=612x612&w=0&k=20&c=hep4uC8ltPjNBCLcILaAWkNizH0w1ZFJWeq6yZiCl50=',
      blogDate: 'Marzo 20, 2023',
      blogTitle: 'Contrónimos',
      blogDescription:
        'El inglés tiene palabras llamadas “contrónimos” o “autoantónimos”, que significan una cosa y su opuesto al mismo tiempo',
    },
    {
      blogImage:
        'https://media.istockphoto.com/id/1288103838/es/foto/se%C3%B1ora-sentada-en-el-escritorio-usando-la-computadora-y-saludando-a-la-c%C3%A1mara-web.jpg?s=612x612&w=0&k=20&c=LFrpsL9fsb6U9_uuQXL7_rBaltTED6-FKlZtt_t1GPo=',
      blogDate: 'Junio 10, 2023',
      blogTitle: 'Origen del Inglés',
      blogDescription:
        'Aunque el inglés es ampliamente hablado, no tiene una Real Academia como otras lenguas.',
    },
  ]);
}
