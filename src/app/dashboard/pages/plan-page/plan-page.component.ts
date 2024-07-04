import { Component, signal } from '@angular/core';
import { PlanCardComponent } from '@/app/dashboard/components/plan-card/plan-card.component';
import { PlanCardItem } from '@/app/dashboard/interfaces/plan-card-item.interface';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [PlanCardComponent],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.css',
})
export default class PlanPageComponent {
  public planCardItems = signal<PlanCardItem[]>([
    {
      title: 'Personal',
      price: 0,
      description: 'Perfecto para un uso personal de la plataforma',
      features: [
        'Maximo 2 usuarios en videollamada',
        'Duración de 40 minutos',
        'Maximo 3 usuarios en grupo',
        '100 mensajes por dia',
      ],
    },
    {
      title: 'Académico',
      price: 50,
      description: 'Perfecto para usuarios más dedicados y constantes',
      features: [
        'Maximo 5 usuarios en videollamada',
        'Duración de 60 minutos',
        'Maximo 5 usuarios en grupo',
        '300 mensajes por dia',
      ],
    },
    {
      title: 'Negocio',
      price: 100,
      description: 'Perfecto para usuarios que buscan contactar con alumnos',
      features: [
        'Maximo 10 usuarios en videollamada',
        'Duración de 120 minutos',
        'Maximo 10 usuarios en grupo',
        '500 mensajes por dia',
      ],
    },
  ]);
}
