import { Component, signal } from '@angular/core';
import { SpeakersContentComponent } from '@/app/dashboard/components/speakers-content/speakers-content.component';
import { SpeakerContentItem } from '@/app/dashboard/interfaces/speaker-content-item.interface';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [SpeakersContentComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css',
})
export default class ExplorePageComponent {
  public speakerContentItems = signal<SpeakerContentItem[]>([
    {
      profileName: 'John Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/690146446/es/foto/hombre-con-brillante-sonrisa-mirando-a-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=bfDUH8yzF3Z7sJr47TQGDCg7vVDjqSSBsPfAtFhtyOA=',
    },
    {
      profileName: 'Martin Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1275842519/es/foto/joven-sonriente-teniendo-conferencia-en-l%C3%ADnea-desde-casa.jpg?s=612x612&w=0&k=20&c=pKzG96kIWXlYtF_9gNB97Nb9OqNs-vIX0XF-rE8x1c0=',
    },
    {
      profileName: 'Barry Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1039925982/es/foto/autofoto.jpg?s=612x612&w=0&k=20&c=kkXm579Iz7ISxJLTub9DsczCiL1ZnpcBFFeT0Ko2IUw=',
    },
    {
      profileName: 'Blair Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1194667750/es/foto/autorretrato-del-joven-africano-feliz-en-ropa-formal.jpg?s=612x612&w=0&k=20&c=v9gUTllc8f7QaKBhiaZgl4r8M-CiN1zmpfbTyhwiIRQ=',
    },
    {
      profileName: 'Jane Tae',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1432544304/es/foto/retrato-selfie-pov-de-mujer-de-negocios-de-pie-en-una-moderna-oficina-de-planta-abierta.jpg?s=612x612&w=0&k=20&c=00nFRARJ4_Bs6LfsiLxScvX7zbV5WfJyAagSLxLY6-Q=',
    },
    {
      profileName: 'Fabiola Moe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1299316617/es/foto/joven-atractiva-alegre-mujer-cauc%C3%A1sica-toma-un-selfie-en-el-tel%C3%A9fono-mientras-mira.jpg?s=612x612&w=0&k=20&c=gofS1twdhxaZZtY2ZBSz2nDzHAuxcnCWkeqrzNL4zT8=',
    },
    {
      profileName: 'Fiona Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1399039559/es/foto/hermosa-mujer-dando-conferencia-en-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=QYdEV0EQ9n5UeUfy2WdBGOt6El9eb8o5Wr6_DrSNpDY=',
    },
    {
      profileName: 'Mary Jane',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/964829210/es/foto/tomar-hacer-empleo-educaci%C3%B3n-lugar-de-trabajo-interior-felicidad-videollamada-internet-conexi%C3%B3n.jpg?s=612x612&w=0&k=20&c=Qc-gy6dmNnjz3BSkBq_WJ0wx4YfEVp6LJ84AVeNPmqQ=',
    },
    {
      profileName: 'Peach Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1499548756/es/foto/hermosa-mujer-sonriente-tom%C3%A1ndose-selfie-con-su-lindo-perro-chow-en-casa.jpg?s=612x612&w=0&k=20&c=qjS-OIE23JoacFhEwWmx8JsIBP4WJ-OVBjoGbj8JyvY=',
    },
    {
      profileName: 'Javier Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1051053416/es/foto/vista-de-la-c%C3%A1mara-de-hombre-tomando-selfie-en-tel%C3%A9fono.jpg?s=612x612&w=0&k=20&c=dQihwOOQhBRZM4TeP-kZJ5MjmWyaqqOQ-Yvhlb5Fi2M=',
    },
    {
      profileName: 'Ursula Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1141944676/es/foto/empleado-de-oficina-alegre-bebiendo-caf%C3%A9-para-llevar.jpg?s=612x612&w=0&k=20&c=Hz5kMyv7Rfd0y64Q0ZUHJiWrvStFoHsWJaPFJUf6XyI=',
    },
    {
      profileName: 'Harper Doe',
      profileOccupation: 'Marketing Manager',
      profileImage:
        'https://media.istockphoto.com/id/1324488107/es/foto/retrato-de-un-joven-estudiante-indio-fuera-del-edificio-del-campus.jpg?s=612x612&w=0&k=20&c=UKE43IP5MsTYCfQT2JLJzlMNn3iRnx-5w6XkRSABUNo=',
    },
  ]);
}
